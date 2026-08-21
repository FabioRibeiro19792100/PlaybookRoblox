import { useEffect, useMemo, useRef, useState } from "react";
import {
  ORDER,
  PAGES,
  getTranslation,
  renderAside,
  renderBody,
} from "./playbookData";
import SetupChecklist from "./SetupChecklist";

const RAIL_GROUPS = [
  { labelKey: "g.dir", items: ["visao", "pilares", "gov"] },
  {
    labelKey: "g.plan",
    items: ["setup", "evento", "infra", "tecnico", "metodo", "ferramentas"],
  },
  { labelKey: "g.out", items: ["comunidade", "aval", "expansao"] },
];

const HERO_IMAGES = {
  visao: "/media/photos/IMG_3726.CR3.png",
  pilares: "/media/photos/IMG_4018.CR3.png",
  teoria: "/media/photos/IMG_4036.CR3.png",
  gov: "/media/photos/IMG_4053.CR3.png",
  setup: "/media/photos/IMG_4076.CR3.png",
  evento: "/media/photos/IMG_4077.CR3.png",
  infra: "/media/photos/IMG_4086.CR3.png",
  tecnico: "/media/photos/IMG_4298.CR3.png",
  metodo: "/media/photos/IMG_4130.CR3.png",
  ferramentas: "/media/photos/IMG_4177.CR3.png",
  partic: "/media/photos/IMG_4263.CR3.png",
  comunidade: "/media/photos/IMG_4267.CR3.png",
  aval: "/media/photos/IMG_4274.CR3.png",
  expansao: "/media/photos/IMG_4293.CR3.png",
};

const VIDEO_SRC = "/media/video/VideoManifestoENG.mp4";
const REAL_LOGO = "/Logo.png";

const MODE_LABELS = {
  pt: { light: "Modo claro", dark: "Modo escuro" },
  en: { light: "Light mode", dark: "Dark mode" },
  es: { light: "Modo claro", dark: "Modo oscuro" },
};

const VIDEO_COPY = {
  pt: {
    eyebrow: "Visão geral em vídeo",
    title: "VideoManifestoENG",
    desc: "Uma leitura audiovisual da proposta, com abertura em tela cheia para apresentação.",
    cta: "Assistir manifesto",
    close: "Fechar vídeo",
  },
  en: {
    eyebrow: "Overview on video",
    title: "VideoManifestoENG",
    desc: "An audiovisual reading of the proposal, opened fullscreen for presentation mode.",
    cta: "Watch manifesto",
    close: "Close video",
  },
  es: {
    eyebrow: "Visión general en video",
    title: "VideoManifestoENG",
    desc: "Una lectura audiovisual de la propuesta, con apertura en pantalla completa para presentación.",
    cta: "Ver manifiesto",
    close: "Cerrar video",
  },
};

function ChevronLeft() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function RailIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="rail-group-check" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function MexicoFlagBadge({ className = "" }) {
  return (
    <span className={`mx-flag-badge${className ? ` ${className}` : ""}`} aria-hidden="true">
      <svg className="mx-flag-badge-svg" viewBox="0 0 26 26">
        <defs>
          <clipPath id="mx-flag-badge-circle">
            <circle cx="13" cy="13" r="13" />
          </clipPath>
        </defs>
        <g clipPath="url(#mx-flag-badge-circle)">
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
    </span>
  );
}

function VideoOverlayTrigger({ title, onOpen }) {
  return (
    <button className="hero-video-trigger" type="button" onClick={onOpen} aria-label={title}>
      <svg className="hero-video-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );
}

function VideoModal({ copy, isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="video-modal" role="dialog" aria-modal="true" aria-label={copy.title}>
      <button className="video-modal-backdrop" type="button" onClick={onClose} aria-label={copy.close} />
      <div className="video-modal-shell">
        <button className="video-modal-close" type="button" onClick={onClose}>
          {copy.close}
        </button>
        <video ref={videoRef} className="video-modal-player" controls autoPlay playsInline preload="metadata">
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

const ACCESS_PASSWORD = "P@ssw0rd";

function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (value === ACCESS_PASSWORD) {
      try { localStorage.setItem("pb-unlocked", "1"); } catch { /* ignore */ }
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-label="Restricted access">
      <form className="gate-card" onSubmit={submit}>
        <div className="gate-title">Restricted access</div>
        <div className="gate-desc">Enter the password to view the playbook.</div>
        <input
          className={`gate-input${error ? " error" : ""}`}
          type="password"
          value={value}
          autoFocus
          placeholder="Password"
          onChange={(e) => { setValue(e.target.value); setError(false); }}
        />
        {error && <div className="gate-error">Incorrect password.</div>}
        <button className="gate-btn" type="submit">Enter</button>
      </form>
    </div>
  );
}

export default function App() {
  const [currentPageId, setCurrentPageId] = useState("visao");
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [videoOpen, setVideoOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashPhase, setSplashPhase] = useState("logo");
  const [locked, setLocked] = useState(() => {
    try { return localStorage.getItem("pb-unlocked") !== "1"; } catch { return true; }
  });
  const mainRef = useRef(null);
  const bodySlotRef = useRef(null);

  const pages = useMemo(
    () =>
      PAGES.map((page) => ({
        ...page,
        heroImage: HERO_IMAGES[page.id],
      })),
    [],
  );

  const currentPage = pages.find((page) => page.id === currentPageId) ?? pages[0];
  const currentIndex = ORDER.indexOf(currentPageId);
  const currentCopy = VIDEO_COPY[lang] ?? VIDEO_COPY.pt;
  const bodyHtml = renderBody(currentPage.body, lang);
  const asideHtml = renderAside(currentPage.aside, lang);
  const hasAside = asideHtml.trim() !== "";
  const themeLabel = (MODE_LABELS[lang] ?? MODE_LABELS.pt)[theme];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const fadeId = window.setTimeout(() => {
      setSplashPhase("fade");
    }, 700);

    const titleId = window.setTimeout(() => {
      setSplashPhase("title");
    }, 1180);

    const timeoutId = window.setTimeout(() => {
      setShowSplash(false);
    }, 2450);

    return () => {
      window.clearTimeout(fadeId);
      window.clearTimeout(titleId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (bodySlotRef.current) {
      bodySlotRef.current.scrollTop = 0;
    }
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [currentPageId, lang]);

  const goPrev = () => {
    const previousIndex = (currentIndex - 1 + ORDER.length) % ORDER.length;
    setCurrentPageId(ORDER[previousIndex]);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % ORDER.length;
    setCurrentPageId(ORDER[nextIndex]);
  };

  return (
    <>
      <div id="splash" className={showSplash ? "" : "hidden"} data-phase={splashPhase} aria-hidden={!showSplash}>
        <div className="splash-inner">
          <img id="splash-logo" src={REAL_LOGO} alt="Expedição Roblox" />
          <div className="splash-title-wrap" aria-hidden={splashPhase !== "title"}>
            <span className="splash-title-arrow" aria-hidden="true">→</span>
            <span className="splash-title">Playbook Latam</span>
          </div>
        </div>
      </div>
      <div className={`app${hasAside ? "" : " no-aside"}`}>
        <aside className="rail">
          <div className="rail-header">
            <span className="rail-badge">
              <span className="rail-badge-dot" />
              Playbook
            </span>
            <div className="rail-title">
              <span className="rail-title-main">Expedição Roblox</span>
              <span className="rail-title-sub">América Latina</span>
            </div>
          </div>

          {RAIL_GROUPS.map((group) => (
            <div className="rail-group" key={group.labelKey}>
              <span className="rail-group-label">
                <CheckIcon />
                {getTranslation(lang, group.labelKey)}
              </span>
              {group.items.map((pageId) => (
                <button
                  key={pageId}
                  className={`rail-item${pageId === currentPageId ? " active" : ""}`}
                  type="button"
                  onClick={() => setCurrentPageId(pageId)}
                >
                  <RailIcon />
                  <span className="rail-item-label">
                    {getTranslation(lang, `n.${pageId === "ferramentas" ? "ferr" : pageId === "comunidade" ? "com" : pageId === "expansao" ? "exp" : pageId}`)}
                    {pageId === "setup" ? <MexicoFlagBadge className="rail-flag-badge" /> : null}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </aside>

        <section className="hero">
          <img className="hero-img" src={currentPage.heroImage} alt={currentPage.title[lang]} />
          <div className="hero-overlay" />
          <div className="hero-accent-line" />
          <div className="hero-logo-shadow" />
          <img className="hero-logo" src={REAL_LOGO} alt="Expedição Roblox" />
          {currentPageId === "visao" ? <VideoOverlayTrigger title={currentCopy.cta} onOpen={() => setVideoOpen(true)} /> : null}

          <div className="hero-content">
            <div className="hero-section-tag">{currentPage.group[lang]}</div>
            <h1 className="hero-title">{currentPage.title[lang]}</h1>
          </div>

          <div className="hero-nav">
            <button className="hero-nav-btn" type="button" onClick={goPrev} aria-label="Seção anterior">
              <ChevronLeft />
            </button>
            <button className="hero-nav-btn" type="button" onClick={goNext} aria-label="Próxima seção">
              <ChevronRight />
            </button>
          </div>

          <div className="hero-controls">
            <div className="hero-lang-switcher">
              {["pt", "en", "es"].map((language) => (
                <button
                  key={language}
                  className={`hero-lang-btn${language === lang ? " active" : ""}`}
                  type="button"
                  onClick={() => setLang(language)}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="hero-theme-toggle" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <div className="hero-theme-track">
                <div className="hero-theme-thumb" />
              </div>
              <span className="hero-theme-label">{themeLabel}</span>
            </button>
          </div>
        </section>

        <main className="main" ref={mainRef}>
          <div className="caput">
            <h2 className="caput-title">{currentPage.caputTitle[lang]}</h2>
            <p className="caput-desc">{currentPage.caputDesc[lang]}</p>
          </div>

          <div className={`body-slot${currentPage.id === "setup" ? " body-slot-setup" : ""}`} ref={bodySlotRef}>
            {currentPage.id === "setup" ? (
              <SetupChecklist lang={lang} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
            )}
          </div>
        </main>

        {hasAside && (
          <aside className="aside">
            <div dangerouslySetInnerHTML={{ __html: asideHtml }} />
          </aside>
        )}

        {!hasAside && <div className="right-spacer" aria-hidden="true" />}

        <footer className="foot">
          <span className="foot-brand">{getTranslation(lang, "foot.brand")}</span>
          <span className="foot-note">{getTranslation(lang, "foot.note")}</span>
        </footer>
      </div>

      <VideoModal copy={currentCopy} isOpen={videoOpen} onClose={() => setVideoOpen(false)} />

      {locked && <PasswordGate onUnlock={() => setLocked(false)} />}
    </>
  );
}
