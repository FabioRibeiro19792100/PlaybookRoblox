import { useCallback, useEffect, useRef, useState } from "react";
import { CHECKLIST, CHECKLIST_TOTAL } from "./checklistData";

// Google Apps Script Web App endpoint (see docs/setup-checklist-AppsScript.gs).
// Set via Vercel env var VITE_SHEETS_ENDPOINT, or paste the /exec URL below.
const SHEETS_ENDPOINT =
  import.meta.env.VITE_SHEETS_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwNwzmSZ7LmI9xEGH2U71MfdGDOogIas7rONVOzw53gNpJoEiFqbf83M32s9pNmtgPT/exec";
const LS_KEY = "setup-mx-checklist-v1";

const LABELS = {
  pt: { task: "Tarefa", deliverable: "Entregável esperado", resp: "Responsável local", done: "Feito",
    sync: { local: "Salvo neste dispositivo", loading: "Carregando…", saving: "Salvando…", synced: "Sincronizado", offline: "Offline — salvo localmente" } },
  en: { task: "Task", deliverable: "Expected deliverable", resp: "Local owner", done: "Done",
    sync: { local: "Saved on this device", loading: "Loading…", saving: "Saving…", synced: "Synced", offline: "Offline — saved locally" } },
  es: { task: "Tarea", deliverable: "Entregable esperado", resp: "Responsable local", done: "Hecho",
    sync: { local: "Guardado en este dispositivo", loading: "Cargando…", saving: "Guardando…", synced: "Sincronizado", offline: "Offline — guardado localmente" } },
};

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
        <div className="ckl-progress">
          <div className="ckl-progress-bar"><span style={{ width: `${pct}%` }} /></div>
          <span className="ckl-progress-label">{doneCount}/{CHECKLIST_TOTAL} · {pct}%</span>
        </div>
        <span className={`ckl-sync ${sync}`}>{L.sync[sync]}</span>
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
              return (
                <label className={`ckl-row${checked ? " is-done" : ""}`} key={id}>
                  <div className="ckl-task">{t.task[lang] || t.task.pt}</div>
                  <div className="ckl-deliv">{t.deliverable[lang] || t.deliverable.pt}</div>
                  <div className="ckl-resp">{t.resp}</div>
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
