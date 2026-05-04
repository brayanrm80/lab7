<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TechAcademy FC — Aprende como un Pro</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #060810;
    --bg2: #0c0f1a;
    --bg3: #111520;
    --surface: #161b2e;
    --surface2: #1c2238;
    --border: rgba(255,255,255,0.07);
    --border2: rgba(255,255,255,0.12);
    --indigo: #6366f1;
    --indigo-dim: rgba(99,102,241,0.15);
    --indigo-glow: rgba(99,102,241,0.4);
    --pink: #ec4899;
    --pink-dim: rgba(236,72,153,0.15);
    --pink-glow: rgba(236,72,153,0.4);
    --gold: #f59e0b;
    --gold-dim: rgba(245,158,11,0.15);
    --green: #10b981;
    --text: #e2e8f0;
    --text2: #94a3b8;
    --text3: #4b5563;
    --grass-light: #16a34a;
    --grass-dark: #15803d;
    --field-line: rgba(255,255,255,0.12);
    --sidebar-w: 380px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  /* ===== SIDEBAR ===== */
  #sidebar {
    width: var(--sidebar-w);
    min-width: var(--sidebar-w);
    background: var(--bg2);
    border-right: 1px solid var(--border2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  .sidebar-header {
    padding: 20px 20px 16px;
    border-bottom: 1px solid var(--border);
    background: var(--bg3);
    flex-shrink: 0;
  }

  .club-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .badge-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, var(--indigo), var(--pink));
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    color: white;
    flex-shrink: 0;
  }

  .club-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
    color: var(--text);
    line-height: 1;
  }

  .club-subtitle {
    font-size: 11px;
    color: var(--text2);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .formation-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .formation-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    color: var(--text2);
  }

  .formation-badges {
    display: flex;
    gap: 6px;
  }

  .pill {
    font-size: 10px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 2px;
    background: var(--indigo-dim);
    color: var(--indigo);
    border: 1px solid rgba(99,102,241,0.3);
  }

  .pill.pink {
    background: var(--pink-dim);
    color: var(--pink);
    border-color: rgba(236,72,153,0.3);
  }

  /* ===== FIELD ===== */
  .field-container {
    flex: 1;
    overflow: hidden;
    position: relative;
    padding: 10px 14px;
  }

  #field {
    width: 100%;
    height: 100%;
    position: relative;
    background:
      repeating-linear-gradient(
        180deg,
        var(--grass-light) 0px,
        var(--grass-light) 28px,
        var(--grass-dark) 28px,
        var(--grass-dark) 56px
      );
    border-radius: 4px;
    overflow: hidden;
  }

  .field-lines {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  /* ===== PLAYER CARDS (Web Component) ===== */
  player-card {
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 10;
  }

  /* ===== MAIN CONTENT ===== */
  #main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--bg);
  }

  .main-topbar {
    height: 60px;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    padding: 0 28px;
    gap: 16px;
    flex-shrink: 0;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    color: var(--text2);
    letter-spacing: 0.5px;
  }

  .breadcrumb .sep { color: var(--text3); }
  .breadcrumb .current { color: var(--text); font-weight: 600; }

  .topbar-right {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .rating-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--gold-dim);
    border: 1px solid rgba(245,158,11,0.3);
    border-radius: 2px;
    padding: 4px 10px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    color: var(--gold);
  }

  .content-area {
    flex: 1;
    overflow-y: auto;
    padding: 28px;
    scrollbar-width: thin;
    scrollbar-color: var(--surface2) transparent;
  }

  /* ===== WELCOME SCREEN ===== */
  #welcome-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
    text-align: center;
    opacity: 1;
    transition: opacity 0.2s;
  }

  .welcome-pitch {
    width: 200px;
    height: 130px;
    position: relative;
    opacity: 0.3;
  }

  .welcome-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 42px;
    letter-spacing: 4px;
    background: linear-gradient(135deg, var(--indigo), var(--pink));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
  }

  .welcome-sub {
    font-size: 14px;
    color: var(--text2);
    max-width: 360px;
    line-height: 1.6;
    font-weight: 300;
  }

  .welcome-arrow {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--indigo);
    animation: pulse-arrow 2s ease-in-out infinite;
  }

  @keyframes pulse-arrow {
    0%, 100% { opacity: 0.5; transform: translateX(0); }
    50% { opacity: 1; transform: translateX(-6px); }
  }

  /* ===== TOPIC VIEW ===== */
  #topic-view {
    display: none;
  }

  .topic-header {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 28px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border);
  }

  .topic-player-card {
    width: 90px;
    flex-shrink: 0;
  }

  .topic-info { flex: 1; }

  .topic-phase-tag {
    font-size: 11px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--pink);
    margin-bottom: 6px;
  }

  .topic-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    letter-spacing: 3px;
    line-height: 1;
    margin-bottom: 10px;
  }

  .topic-stats {
    display: flex;
    gap: 16px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .stat-val {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    color: var(--indigo);
    letter-spacing: 1px;
  }

  .stat-label {
    font-size: 10px;
    color: var(--text3);
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* ===== VIDEO SECTION ===== */
  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    color: var(--text2);
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
  }

  .section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .main-video-wrap {
    background: #000;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin-bottom: 28px;
    border: 1px solid var(--border2);
    aspect-ratio: 16/9;
  }

  .main-video-wrap iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .video-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(6,8,16,0.7);
    cursor: pointer;
    transition: background 0.2s;
  }

  .video-overlay:hover { background: rgba(6,8,16,0.5); }

  .play-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--indigo);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, background 0.2s;
  }

  .play-btn:hover { transform: scale(1.1); background: var(--pink); }

  .play-btn svg { width: 24px; height: 24px; fill: white; margin-left: 4px; }

  .video-meta {
    position: absolute;
    bottom: 14px;
    left: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .duration-chip {
    background: rgba(0,0,0,0.7);
    border: 1px solid var(--border2);
    border-radius: 2px;
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: var(--text);
    padding: 2px 8px;
    letter-spacing: 1px;
  }

  /* ===== HIGHLIGHTS ===== */
  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin-bottom: 28px;
  }

  .highlight-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 12px;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .highlight-card:hover {
    border-color: var(--indigo);
    background: var(--surface2);
  }

  .highlight-time {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 15px;
    color: var(--indigo);
    letter-spacing: 1px;
    min-width: 40px;
    flex-shrink: 0;
    padding-top: 1px;
  }

  .highlight-info { flex: 1; }

  .highlight-name {
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: 0.5px;
    line-height: 1.3;
  }

  .highlight-desc {
    font-size: 11px;
    color: var(--text2);
    margin-top: 3px;
    line-height: 1.4;
  }

  /* ===== CHAPTERS ===== */
  .chapters-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 28px;
  }

  .chapter-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--pink);
    border-radius: 0 4px 4px 0;
    padding: 14px 16px;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .chapter-item:hover {
    background: var(--surface2);
    border-left-color: var(--indigo);
  }

  .chapter-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    color: var(--text3);
    letter-spacing: 1px;
    min-width: 28px;
  }

  .chapter-info { flex: 1; }

  .chapter-title {
    font-family: 'Rajdhani', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: 0.5px;
  }

  .chapter-meta {
    font-size: 11px;
    color: var(--text2);
    margin-top: 3px;
  }

  .chapter-thumb {
    width: 80px;
    height: 45px;
    background: var(--bg);
    border-radius: 3px;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
    border: 1px solid var(--border2);
  }

  .chapter-thumb iframe {
    width: 160%;
    height: 160%;
    transform: scale(0.625);
    transform-origin: top left;
    border: none;
    pointer-events: none;
  }

  /* ===== SCROLLBAR ===== */
  .content-area::-webkit-scrollbar { width: 4px; }
  .content-area::-webkit-scrollbar-track { background: transparent; }
  .content-area::-webkit-scrollbar-thumb { background: var(--surface2); border-radius: 2px; }
</style>
</head>
<body>

<!-- ===== SIDEBAR ===== -->
<aside id="sidebar">
  <div class="sidebar-header">
    <div class="club-badge">
      <div class="badge-icon">TC</div>
      <div>
        <div class="club-name">TechAcademy FC</div>
        <div class="club-subtitle">Season 2025 — Web Dev</div>
      </div>
    </div>
    <div class="formation-label">
      <span class="formation-text">Formation 4-3-3 · 11 Topics</span>
      <div class="formation-badges">
        <span class="pill">Phase I</span>
        <span class="pill pink">Active</span>
      </div>
    </div>
  </div>

  <div class="field-container">
    <div id="field">
      <svg class="field-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <!-- Outer border -->
        <rect x="2" y="2" width="96" height="96" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
        <!-- Midfield line -->
        <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
        <!-- Center circle -->
        <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
        <circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.2)"/>
        <!-- Top penalty area -->
        <rect x="25" y="2" width="50" height="18" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
        <!-- Top 6-yard box -->
        <rect x="37" y="2" width="26" height="7" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.4"/>
        <!-- Bottom penalty area -->
        <rect x="25" y="80" width="50" height="18" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
        <!-- Bottom 6-yard box -->
        <rect x="37" y="91" width="26" height="7" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.4"/>
        <!-- Top goal -->
        <rect x="40" y="0" width="20" height="2" fill="rgba(255,255,255,0.15)"/>
        <!-- Bottom goal -->
        <rect x="40" y="98" width="20" height="2" fill="rgba(255,255,255,0.15)"/>
      </svg>

      <!-- Player cards injected by JS -->
    </div>
  </div>
</aside>

<!-- ===== MAIN ===== -->
<main id="main">
  <div class="main-topbar">
    <div class="breadcrumb" id="breadcrumb">
      <span>TechAcademy FC</span>
      <span class="sep">›</span>
      <span>Elige un jugador</span>
    </div>
    <div class="topbar-right">
      <div class="rating-badge">★ OVR 87</div>
    </div>
  </div>

  <div class="content-area">
    <div id="welcome-screen">
      <svg class="welcome-pitch" viewBox="0 0 200 130">
        <rect x="5" y="5" width="190" height="120" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" rx="2"/>
        <line x1="5" y1="65" x2="195" y2="65" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
        <circle cx="100" cy="65" r="20" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
        <rect x="60" y="5" width="80" height="28" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
        <rect x="60" y="97" width="80" height="28" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      </svg>
      <div class="welcome-title">Selecciona<br>tu jugador</div>
      <div class="welcome-sub">Cada jugador del 11 inicial representa un tema del curso. Selecciona uno para ver su contenido.</div>
      <div class="welcome-arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15 18l-6-6 6-6"/></svg>
        Selecciona en el campo
      </div>
    </div>

    <div id="topic-view"></div>
  </div>
</main>

<!-- ===== WEB COMPONENT: player-card ===== -->
<script>
class PlayerCard extends HTMLElement {
  static get observedAttributes() {
    return ['position', 'name', 'rating', 'role', 'phase', 'topic-id', 'locked', 'completed'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  render() {
    const pos = this.getAttribute('position') || 'CM';
    const name = this.getAttribute('name') || 'Player';
    const rating = this.getAttribute('rating') || '75';
    const role = this.getAttribute('role') || '';
    const phase = this.getAttribute('phase') || '1';
    const locked = this.hasAttribute('locked');
    const completed = this.hasAttribute('completed');

    const phaseColors = {
      '1': { accent: '#6366f1', dim: 'rgba(99,102,241,0.2)', border: 'rgba(99,102,241,0.5)' },
      '2': { accent: '#ec4899', dim: 'rgba(236,72,153,0.2)', border: 'rgba(236,72,153,0.5)' },
      '3': { accent: '#10b981', dim: 'rgba(16,185,129,0.2)', border: 'rgba(16,185,129,0.5)' },
      '4': { accent: '#f59e0b', dim: 'rgba(245,158,11,0.2)', border: 'rgba(245,158,11,0.5)' },
    };
    const c = phaseColors[phase] || phaseColors['1'];

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; cursor: pointer; }
        .card {
          width: 54px;
          background: ${locked ? '#0c0f1a' : '#0f1624'};
          border: 1.5px solid ${locked ? 'rgba(255,255,255,0.08)' : c.border};
          border-radius: 3px;
          padding: 5px 4px 6px;
          text-align: center;
          transition: all 0.15s;
          position: relative;
          font-family: 'Rajdhani', sans-serif;
          user-select: none;
          box-shadow: ${locked ? 'none' : `0 0 12px ${c.dim}`};
        }
        :host(:hover) .card {
          border-color: ${locked ? 'rgba(255,255,255,0.15)' : c.accent};
          transform: translateY(-2px) scale(1.05);
          box-shadow: ${locked ? 'none' : `0 4px 20px ${c.dim}, 0 0 0 1px ${c.accent}`};
          z-index: 20;
        }
        :host(.selected) .card {
          border-color: #f59e0b !important;
          box-shadow: 0 0 16px rgba(245,158,11,0.5), 0 0 0 1px #f59e0b !important;
          background: #141a22 !important;
        }
        .rating {
          font-family: 'Bebas Neue', cursive;
          font-size: 17px;
          color: ${locked ? '#4b5563' : c.accent};
          letter-spacing: 1px;
          line-height: 1;
          margin-bottom: 2px;
        }
        .pos {
          font-family: 'Bebas Neue', cursive;
          font-size: 10px;
          color: ${locked ? '#374151' : 'rgba(255,255,255,0.5)'};
          letter-spacing: 1.5px;
          margin-bottom: 3px;
        }
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: ${locked ? '#111827' : c.dim};
          border: 1px solid ${locked ? 'rgba(255,255,255,0.05)' : c.border};
          margin: 0 auto 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: ${locked ? '#4b5563' : c.accent};
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 1px;
        }
        .name {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: ${locked ? '#374151' : 'rgba(255,255,255,0.75)'};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: uppercase;
          line-height: 1.2;
        }
        .completed-dot {
          position: absolute;
          top: 3px;
          right: 3px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }
        .lock-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(6,8,16,0.6);
          border-radius: 2px;
        }
        .lock-icon svg { width: 14px; height: 14px; fill: rgba(255,255,255,0.15); }
      </style>
      <div class="card">
        ${completed ? '<div class="completed-dot"></div>' : ''}
        <div class="rating">${rating}</div>
        <div class="pos">${pos}</div>
        <div class="avatar">${name.slice(0,2).toUpperCase()}</div>
        <div class="name">${name}</div>
        ${locked ? `<div class="lock-icon"><svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg></div>` : ''}
      </div>
    `;
  }
}
customElements.define('player-card', PlayerCard);
</script>

<!-- ===== WEB COMPONENT: highlight-item ===== -->
<script>
class HighlightItem extends HTMLElement {
  static get observedAttributes() { return ['time', 'name', 'desc', 'video-id']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }
  render() {
    const time = this.getAttribute('time') || '0:00';
    const name = this.getAttribute('name') || '';
    const desc = this.getAttribute('desc') || '';
    const videoId = this.getAttribute('video-id') || '';
    const [h, m, s] = time.split(':').reverse();
    const seconds = parseInt(s||0) + parseInt(m||0)*60 + parseInt(h||0)*3600;

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600&display=swap');
        :host { display: block; }
        .card {
          background: #161b2e;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px;
          padding: 12px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-family: 'Rajdhani', sans-serif;
        }
        .card:hover {
          border-color: #6366f1;
          background: #1c2238;
        }
        .time {
          font-family: 'Bebas Neue', cursive;
          font-size: 15px;
          color: #6366f1;
          letter-spacing: 1px;
          min-width: 44px;
          flex-shrink: 0;
          padding-top: 1px;
        }
        .info { flex: 1; }
        .name {
          font-size: 13px;
          font-weight: 600;
          color: #e2e8f0;
          letter-spacing: 0.5px;
          line-height: 1.3;
        }
        .desc {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 3px;
          line-height: 1.4;
        }
        .go-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .card:hover .go-btn { background: rgba(99,102,241,0.35); }
        .go-btn svg { width: 10px; height: 10px; fill: #6366f1; margin-left: 1px; }
      </style>
      <div class="card" id="c">
        <span class="time">${time}</span>
        <div class="info">
          <div class="name">${name}</div>
          ${desc ? `<div class="desc">${desc}</div>` : ''}
        </div>
        <div class="go-btn"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></div>
      </div>
    `;
    if (videoId) {
      this.shadowRoot.getElementById('c').addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('jump-to', { detail: { videoId, seconds } }));
      });
    }
  }
}
customElements.define('highlight-item', HighlightItem);
</script>

<!-- ===== DATA + LOGIC ===== -->
<script>
const COURSE = {
  name: "Web Dev Completo",
  phases: [
    {
      id: "p1", name: "Fundamentos", color: "1",
      topics: [
        {
          id: "terminal", name: "Terminal", pos: "GK", rating: 82, role: "Guardameta",
          videoId: "nZ1DmabOWfI", duration: "4h 12m",
          highlights: [
            { time: "0:05:20", name: "¿Qué es la terminal?", desc: "Conceptos básicos y tipos de shells" },
            { time: "0:18:45", name: "Navegación básica", desc: "cd, ls, pwd y sus variantes" },
            { time: "0:42:10", name: "Gestión de archivos", desc: "cp, mv, rm, mkdir" },
            { time: "1:15:30", name: "Permisos en Unix", desc: "chmod, chown, sudo" },
            { time: "2:05:00", name: "Variables de entorno", desc: "PATH, export y configuración" },
            { time: "3:10:20", name: "Scripts Bash", desc: "Automatización de tareas repetitivas" },
          ],
          chapters: null
        },
        {
          id: "git", name: "Git", pos: "CB", rating: 88, role: "Defensa Central",
          videoId: "hwP7WQkmECE", duration: "5h 30m",
          highlights: [
            { time: "0:08:00", name: "Qué es el control de versiones", desc: "Historia y propósito de Git" },
            { time: "0:25:15", name: "Init, add y commit", desc: "El ciclo básico de trabajo" },
            { time: "1:00:40", name: "Branching y merging", desc: "Trabajo en paralelo con ramas" },
            { time: "2:15:00", name: "Git rebase y cherry-pick", desc: "Reescribiendo la historia" },
            { time: "3:40:20", name: "GitHub y colaboración", desc: "Pull requests y code review" },
          ],
          chapters: [
            { id: "ch1", title: "Introducción a Git", videoId: "3GymExBkKjE", duration: "32 min", highlights: ["0:08:00","0:25:15"] },
            { id: "ch2", title: "Branches y flujos de trabajo", videoId: "oPpnCh7InLY", duration: "28 min", highlights: ["1:00:40"] },
            { id: "ch3", title: "GitHub y remotes", videoId: "i_23KUAEtUM", duration: "40 min", highlights: ["3:40:20"] },
          ]
        },
        {
          id: "html", name: "HTML", pos: "LB", rating: 85, role: "Lateral Izquierdo",
          videoId: "kUMe1FH4CHE", duration: "4h 45m",
          highlights: [
            { time: "0:10:00", name: "Estructura de un documento HTML", desc: "<!DOCTYPE>, head y body" },
            { time: "0:35:20", name: "Etiquetas semánticas", desc: "header, main, section, article, footer" },
            { time: "1:20:00", name: "Formularios completos", desc: "Input types, validación nativa" },
            { time: "2:30:00", name: "Accesibilidad básica", desc: "ARIA roles y atributos" },
            { time: "3:45:10", name: "SEO on-page", desc: "Meta tags, Open Graph, schemas" },
          ],
          chapters: null
        },
        {
          id: "css", name: "CSS", pos: "RB", rating: 90, role: "Lateral Derecho",
          videoId: "wZniZEbPAzk", duration: "6h 00m",
          highlights: [
            { time: "0:12:00", name: "Box model y display", desc: "inline, block, inline-block" },
            { time: "0:50:00", name: "Flexbox completo", desc: "Ejes, alineación, wrap" },
            { time: "1:45:00", name: "CSS Grid", desc: "Template areas y auto-fit" },
            { time: "2:50:00", name: "Variables CSS", desc: "Custom properties y temas" },
            { time: "4:10:00", name: "Animaciones y transiciones", desc: "keyframes, timing functions" },
            { time: "5:20:00", name: "CSS Avanzado", desc: "Container queries, :has()" },
          ],
          chapters: [
            { id: "ch1", title: "Fundamentos de CSS", videoId: "yMEjLBKyvEg", duration: "45 min", highlights: ["0:12:00","0:50:00"] },
            { id: "ch2", title: "Layout: Flex y Grid", videoId: "phWxA89Dy94", duration: "52 min", highlights: ["1:45:00"] },
            { id: "ch3", title: "CSS Moderno y Variables", videoId: "ouncVBiye_M", duration: "38 min", highlights: ["2:50:00","5:20:00"] },
          ]
        },
      ]
    },
    {
      id: "p2", name: "JavaScript", color: "2",
      topics: [
        {
          id: "js-bases", name: "JS Bases", pos: "CDM", rating: 91, role: "Pivote",
          videoId: "ysEN5RaKOlA", duration: "5h 15m",
          highlights: [
            { time: "0:15:00", name: "Variables y tipos de datos", desc: "var, let, const, primitivos" },
            { time: "0:45:00", name: "Funciones y scope", desc: "Hoisting, closures, this" },
            { time: "1:30:00", name: "Arrays y objetos", desc: "Métodos modernos, desestructuración" },
            { time: "2:40:00", name: "Promesas y async/await", desc: "Gestión asíncrona moderna" },
            { time: "3:50:00", name: "ES6+ Features", desc: "Arrow fn, spread, optional chaining" },
          ],
          chapters: null
        },
        {
          id: "js-dom", name: "DOM", pos: "CM", rating: 87, role: "Mediocampista",
          videoId: "7Tok22qxPzQ", duration: "3h 50m",
          highlights: [
            { time: "0:08:00", name: "Selección de elementos", desc: "querySelector y variantes" },
            { time: "0:35:00", name: "Eventos", desc: "addEventListener, bubbling, delegation" },
            { time: "1:10:00", name: "Manipulación del DOM", desc: "createElement, insertAdjacentHTML" },
            { time: "2:00:00", name: "Fetch API", desc: "Peticiones HTTP y manejo de errores" },
          ],
          chapters: [
            { id: "ch1", title: "El DOM y su estructura", videoId: "0ik6X4DJKCc", duration: "24 min", highlights: ["0:08:00"] },
            { id: "ch2", title: "Eventos y delegación", videoId: "XF1_MlZ5l6M", duration: "30 min", highlights: ["0:35:00"] },
          ]
        },
        {
          id: "js-avanzado", name: "JS Avanzado", pos: "CAM", rating: 93, role: "Mediapunta",
          videoId: "aXOChLn5ZdQ", duration: "4h 00m",
          highlights: [
            { time: "0:20:00", name: "Prototipos y herencia", desc: "Prototype chain en profundidad" },
            { time: "1:05:00", name: "Patrones de diseño", desc: "Module, Observer, Factory" },
            { time: "2:10:00", name: "Web APIs modernas", desc: "IntersectionObserver, Web Workers" },
            { time: "3:15:00", name: "Performance JS", desc: "Debounce, throttle, memoización" },
          ],
          chapters: null
        },
      ]
    },
    {
      id: "p3", name: "Herramientas", color: "3",
      topics: [
        {
          id: "react", name: "React", pos: "LW", rating: 95, role: "Extremo Izquierdo",
          videoId: "SqcY0GlETPk", duration: "6h 30m",
          highlights: [
            { time: "0:20:00", name: "JSX y componentes", desc: "Sintaxis y filosofía de componentes" },
            { time: "1:00:00", name: "useState y efectos", desc: "State management básico" },
            { time: "2:00:00", name: "Componentes avanzados", desc: "Context, useReducer" },
            { time: "3:30:00", name: "Hooks personalizados", desc: "Abstracción de lógica reutilizable" },
            { time: "5:00:00", name: "React Router", desc: "Navegación en SPAs" },
          ],
          chapters: [
            { id: "ch1", title: "React desde cero", videoId: "Ke90Tje7VS0", duration: "60 min", highlights: ["0:20:00","1:00:00"] },
            { id: "ch2", title: "Hooks en profundidad", videoId: "O6P86uwfdR0", duration: "48 min", highlights: ["2:00:00","3:30:00"] },
          ]
        },
        {
          id: "node", name: "Node.js", pos: "ST", rating: 89, role: "Delantero",
          videoId: "yB4n_K7SNd8", duration: "5h 45m",
          highlights: [
            { time: "0:10:00", name: "Node.js runtime", desc: "Event loop, módulos, npm" },
            { time: "0:55:00", name: "Express.js", desc: "Rutas, middlewares, error handling" },
            { time: "2:00:00", name: "REST API completa", desc: "CRUD con Express" },
            { time: "3:30:00", name: "Autenticación JWT", desc: "Login seguro con tokens" },
          ],
          chapters: null
        },
        {
          id: "databases", name: "Databases", pos: "RW", rating: 86, role: "Extremo Derecho",
          videoId: "OqjJjpjDRLc", duration: "4h 20m",
          highlights: [
            { time: "0:15:00", name: "SQL fundamentals", desc: "SELECT, JOIN, subqueries" },
            { time: "1:10:00", name: "PostgreSQL avanzado", desc: "Índices, transacciones, JSONB" },
            { time: "2:20:00", name: "MongoDB y NoSQL", desc: "Documentos, aggregation pipeline" },
            { time: "3:30:00", name: "ORM con Prisma", desc: "Abstracción de base de datos" },
          ],
          chapters: [
            { id: "ch1", title: "SQL desde cero", videoId: "HXV3zeQKqGY", duration: "55 min", highlights: ["0:15:00"] },
            { id: "ch2", title: "MongoDB completo", videoId: "c2M-rlkkT5o", duration: "40 min", highlights: ["2:20:00"] },
          ]
        },
      ]
    }
  ]
};

// Flatten topics
const ALL_TOPICS = COURSE.phases.flatMap(p => p.topics.map(t => ({ ...t, phaseId: p.id, phaseName: p.name, phaseColor: p.color })));

// Formation positions (% from top-left of field)
const POSITIONS = {
  // 4-3-3 formation
  GK:  { left: 50, top: 90 },
  CB:  { left: 38, top: 72 },
  CB2: { left: 62, top: 72 },
  LB:  { left: 18, top: 72 },
  RB:  { left: 82, top: 72 },
  CDM: { left: 50, top: 52 },
  CM:  { left: 30, top: 44 },
  CAM: { left: 70, top: 44 },
  LW:  { left: 20, top: 20 },
  ST:  { left: 50, top: 14 },
  RW:  { left: 80, top: 20 },
};

// Map topic positions
const TOPIC_POSITIONS = {
  GK: 'GK', LB: 'LB', CB: 'CB', RB: 'RB',
  CDM: 'CDM', CM: 'CM', CAM: 'CAM',
  LW: 'LW', ST: 'ST', RW: 'RW'
};

function buildField() {
  const field = document.getElementById('field');
  // Remove old cards
  field.querySelectorAll('player-card').forEach(c => c.remove());

  ALL_TOPICS.forEach(topic => {
    const posKey = topic.pos;
    const posData = POSITIONS[posKey];
    if (!posData) return;

    const card = document.createElement('player-card');
    card.setAttribute('name', topic.name);
    card.setAttribute('rating', topic.rating);
    card.setAttribute('position', topic.pos);
    card.setAttribute('role', topic.role);
    card.setAttribute('phase', topic.phaseColor);
    card.setAttribute('topic-id', topic.id);

    card.style.left = posData.left + '%';
    card.style.top = posData.top + '%';

    card.addEventListener('click', () => selectTopic(topic, card));
    field.appendChild(card);
  });
}

let currentVideoId = null;
let currentIframe = null;

function selectTopic(topic, cardEl) {
  // Deselect all
  document.querySelectorAll('player-card').forEach(c => c.classList.remove('selected'));
  cardEl.classList.add('selected');

  currentVideoId = topic.videoId;

  // Update breadcrumb
  document.getElementById('breadcrumb').innerHTML = `
    <span>TechAcademy FC</span>
    <span class="sep">›</span>
    <span>${topic.phaseName}</span>
    <span class="sep">›</span>
    <span class="current">${topic.name}</span>
  `;

  // Hide welcome, show topic
  document.getElementById('welcome-screen').style.display = 'none';
  const view = document.getElementById('topic-view');
  view.style.display = 'block';

  const phaseColors = {
    '1': '#6366f1', '2': '#ec4899', '3': '#10b981', '4': '#f59e0b'
  };
  const accent = phaseColors[topic.phaseColor] || '#6366f1';

  view.innerHTML = `
    <div class="topic-header">
      <div class="topic-info">
        <div class="topic-phase-tag">${topic.phaseName} · ${topic.role}</div>
        <div class="topic-title" style="color: ${accent}">${topic.name}</div>
        <div class="topic-stats">
          <div class="stat">
            <div class="stat-val" style="color:${accent}">${topic.rating}</div>
            <div class="stat-label">Rating</div>
          </div>
          <div class="stat">
            <div class="stat-val" style="color:${accent}">${topic.highlights.length}</div>
            <div class="stat-label">Highlights</div>
          </div>
          <div class="stat">
            <div class="stat-val" style="color:${accent}">${topic.chapters ? topic.chapters.length : '—'}</div>
            <div class="stat-label">Capítulos</div>
          </div>
          <div class="stat">
            <div class="stat-val" style="color:${accent}">${topic.duration}</div>
            <div class="stat-label">Duración</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-title">Partido Completo</div>
    <div class="main-video-wrap" id="main-video-wrap">
      <iframe id="main-iframe"
        src="https://www.youtube.com/embed/${topic.videoId}?enablejsapi=1&rel=0&modestbranding=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <div class="section-title">Highlights</div>
    <div class="highlights-grid" id="highlights-grid"></div>

    ${topic.chapters ? `
      <div class="section-title">Capítulos Editados</div>
      <div class="chapters-list" id="chapters-list"></div>
    ` : ''}
  `;

  // Inject highlights as web components
  const hGrid = view.querySelector('#highlights-grid');
  topic.highlights.forEach(h => {
    const el = document.createElement('highlight-item');
    el.setAttribute('time', h.time);
    el.setAttribute('name', h.name);
    el.setAttribute('desc', h.desc);
    el.setAttribute('video-id', topic.videoId);
    hGrid.appendChild(el);
  });

  // Inject chapters
  if (topic.chapters) {
    const cList = view.querySelector('#chapters-list');
    topic.chapters.forEach((ch, i) => {
      const item = document.createElement('div');
      item.className = 'chapter-item';
      item.innerHTML = `
        <div class="chapter-num">${String(i+1).padStart(2,'0')}</div>
        <div class="chapter-info">
          <div class="chapter-title">${ch.title}</div>
          <div class="chapter-meta">${ch.duration} · ${ch.highlights.length} highlights incluidos</div>
        </div>
        <div class="chapter-thumb">
          <iframe src="https://www.youtube.com/embed/${ch.videoId}?mute=1&controls=0&rel=0" tabindex="-1"></iframe>
        </div>
      `;
      item.addEventListener('click', () => {
        const iframe = document.getElementById('main-iframe');
        if (iframe) {
          iframe.src = `https://www.youtube.com/embed/${ch.videoId}?autoplay=1&rel=0&modestbranding=1`;
          iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      cList.appendChild(item);
    });
  }

  currentIframe = view.querySelector('#main-iframe');
}

// Jump to timestamp
document.addEventListener('jump-to', (e) => {
  const { videoId, seconds } = e.detail;
  if (currentIframe) {
    currentIframe.src = `https://www.youtube.com/embed/${videoId}?start=${seconds}&autoplay=1&rel=0`;
    currentIframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

buildField();
</script>
</body>
</html>