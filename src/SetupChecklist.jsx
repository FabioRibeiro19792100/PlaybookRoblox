import { useCallback, useEffect, useRef, useState } from "react";
import { CHECKLIST, CHECKLIST_TOTAL } from "./checklistData";

// Google Apps Script Web App endpoint (see docs/setup-checklist-AppsScript.gs).
// Set via Vercel env var VITE_SHEETS_ENDPOINT, or paste the /exec URL below.
const SHEETS_ENDPOINT =
  import.meta.env.VITE_SHEETS_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwNwzmSZ7LmI9xEGH2U71MfdGDOogIas7rONVOzw53gNpJoEiFqbf83M32s9pNmtgPT/exec";
const LS_KEY = "setup-mx-checklist-v1";

const LABELS = {
  pt: { task: "Tarefa", deliverable: "Entregável esperado", resp: "Envolvimento", done: "Feito",
    sync: { local: "Salvo neste dispositivo", loading: "Carregando…", saving: "Salvando…", synced: "Sincronizado", offline: "Offline — salvo localmente" } },
  en: { task: "Task", deliverable: "Expected deliverable", resp: "Involvement", done: "Done",
    sync: { local: "Saved on this device", loading: "Loading…", saving: "Saving…", synced: "Synced", offline: "Offline — saved locally" } },
  es: { task: "Tarea", deliverable: "Entregable esperado", resp: "Participación", done: "Hecho",
    sync: { local: "Guardado en este dispositivo", loading: "Cargando…", saving: "Guardando…", synced: "Sincronizado", offline: "Offline — guardado localmente" } },
};

function getInvolvement(resp) {
  const hasBrazil = /Mastertech/.test(resp || "");
  return hasBrazil ? ["mx", "br"] : ["mx"];
}

const FLAG_META = {
  mx: { label: "México" },
  br: { label: "Brasil" },
};

function FlagIcon({ code, title }) {
  if (code === "mx") {
    return (
      <svg className="ckl-flag-svg" viewBox="0 0 26 26" aria-hidden="true">
        <defs>
          <clipPath id="flag-circle-mx">
            <circle cx="13" cy="13" r="13" />
          </clipPath>
        </defs>
        <g clipPath="url(#flag-circle-mx)">
          <rect width="8.67" height="26" x="0" y="0" fill="#0f7a53" />
          <rect width="8.66" height="26" x="8.67" y="0" fill="#f7f5ef" />
          <rect width="8.67" height="26" x="17.33" y="0" fill="#d91f2d" />
          <circle cx="13" cy="13" r="2.1" fill="#b07a2a" />
          <path d="M13 9.8c1.2 0 2.05.85 2.05 1.9 0 1.15-.9 2.1-2.05 2.1s-2.05-.95-2.05-2.1c0-1.05.85-1.9 2.05-1.9Z" fill="#7a4b21" />
          <path d="M11.2 15.1c.55.45 1.15.7 1.8.7.68 0 1.3-.25 1.82-.72" stroke="#2f8a57" strokeWidth="0.9" strokeLinecap="round" />
          <path d="M10.9 14.7c-.65.28-1.15.7-1.45 1.32M15.1 14.7c.65.28 1.15.7 1.45 1.32" stroke="#b07a2a" strokeWidth="0.7" strokeLinecap="round" />
        </g>
        <circle cx="13" cy="13" r="12.5" fill="none" stroke="rgba(0,0,0,.08)" />
      </svg>
    );
  }

  return (
    <svg className="ckl-flag-svg" viewBox="0 0 26 26" aria-hidden="true">
      <defs>
        <clipPath id="flag-circle-br">
          <circle cx="13" cy="13" r="13" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-circle-br)">
        <rect width="26" height="26" fill="#149447" />
        <polygon points="13,4.2 22.2,13 13,21.8 3.8,13" fill="#f2c330" />
        <circle cx="13" cy="13" r="5.2" fill="#1f459f" />
        <path d="M8.8 12.4c2.15 1.05 5.1 1 8.45-.18" stroke="#f7f7f7" strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="10.1" cy="10.2" r=".45" fill="#f7f7f7" />
        <circle cx="11.8" cy="14.8" r=".38" fill="#f7f7f7" />
        <circle cx="14.2" cy="11.1" r=".42" fill="#f7f7f7" />
        <circle cx="16.1" cy="15.2" r=".34" fill="#f7f7f7" />
      </g>
      <circle cx="13" cy="13" r="12.5" fill="none" stroke="rgba(0,0,0,.08)" />
    </svg>
  );
}

function readLocal() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; }
}
function writeLocal(state) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

export default function SetupChecklist({ lang }) {
  const L = LABELS[lang] || LABELS.pt;
  const [done, setDone] = useState(() => readLocal());
  const [sync, setSync] = useState(SHEETS_ENDPOINT ? "loading" : "local");
  // Ids the user toggled this session — they must survive a late initial GET.
  const dirty = useRef({});

  // Load shared state from Google Sheets (if configured).
  useEffect(() => {
    if (!SHEETS_ENDPOINT) return;
    let alive = true;
    fetch(SHEETS_ENDPOINT, { method: "GET" })
      .then((r) => r.json())
      .then((data) => {
        if (!alive || !data || typeof data !== "object") return;
        // Sheet is the source of truth, but never clobber local toggles still in flight.
        setDone((prev) => {
          const merged = { ...data };
          for (const id of Object.keys(dirty.current)) merged[id] = prev[id];
          writeLocal(merged);
          return merged;
        });
        setSync("synced");
      })
      .catch(() => alive && setSync("offline"));
    return () => { alive = false; };
  }, []);

  const toggle = useCallback((id) => {
    dirty.current[id] = true;
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      writeLocal(next);
      if (SHEETS_ENDPOINT) {
        setSync("saving");
        fetch(SHEETS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ id, done: next[id] }),
        })
          .then(() => setSync("synced"))
          .catch(() => setSync("offline"));
      }
      return next;
    });
  }, []);

  const doneCount = CHECKLIST.reduce(
    (sum, sec) => sum + sec.tasks.filter((_, i) => done[`s${sec.n}t${i + 1}`]).length,
    0
  );
  const pct = Math.round((doneCount / CHECKLIST_TOTAL) * 100);

  return (
    <div className="ckl">
      <div className="ckl-head">
        <div className="ckl-head-meta">
          <span className="ckl-progress-label">{doneCount}/{CHECKLIST_TOTAL} · {pct}%</span>
          <span className={`ckl-sync ${sync}`}>{L.sync[sync]}</span>
        </div>
      </div>

      {CHECKLIST.map((sec) => (
        <div className="ckl-section" key={sec.n}>
          <div className="ckl-section-title">
            <span className="ckl-section-num">{String(sec.n).padStart(2, "0")}</span>
            {sec.title[lang] || sec.title.pt}
          </div>
          <div className="ckl-table">
            <div className="ckl-row ckl-row-head">
              <div>{L.task}</div>
              <div>{L.deliverable}</div>
              <div>{L.resp}</div>
              <div className="ckl-check-col">{L.done}</div>
            </div>
            {sec.tasks.map((t, i) => {
              const id = `s${sec.n}t${i + 1}`;
              const checked = !!done[id];
              const involvement = getInvolvement(t.resp);
              return (
                <label className={`ckl-row${checked ? " is-done" : ""}`} key={id}>
                  <div className="ckl-task">{t.task[lang] || t.task.pt}</div>
                  <div className="ckl-deliv">{t.deliverable[lang] || t.deliverable.pt}</div>
                  <div className="ckl-resp">
                    <span className="ckl-flags" aria-label={involvement.length > 1 ? "Mexico and Brazil involvement" : "Mexico involvement"}>
                      {involvement.map((code) => {
                        const flag = FLAG_META[code];
                        return (
                          <span key={code} className="ckl-flag" title={flag.label}>
                            <FlagIcon code={code} title={flag.label} />
                          </span>
                        );
                      })}
                    </span>
                  </div>
                  <div className="ckl-check-col">
                    <input type="checkbox" checked={checked} onChange={() => toggle(id)} />
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
