(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const c={BASE_URL:"/api"};function f({songs:e,title:i}){const r=e[0]||{},t=r.audio_type==="soundcloud"&&r.soundcloud_url?`<iframe title="SoundCloud player" width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(r.soundcloud_url)}&color=%23f0e6ff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false"></iframe>`:`<audio controls preload="metadata" src="${r.audio_url||""}"></audio>`;return`
    <div class="player-card">
      <div class="player-header">
        <div>
          <p class="eyebrow">Now playing</p>
          <div class="track-title">${r.title||i}</div>
        </div>
        <div class="controls">
          <button type="button">⏮</button>
          <button type="button">▶</button>
          <button type="button">⏭</button>
          <button type="button" class="open-cv-btn" aria-label="Open CV">📄 CV</button>
        </div>
      </div>
      <div>${t}</div>
      <div class="progress-row">
        <span>00:00</span>
        <input type="range" value="0" />
        <span>00:00</span>
      </div>
      <p class="hero-description">${r.description||"Dynamic audio playback with local files or SoundCloud embeds."}</p>
    </div>
  `}function m({release:e}){return`
    <article class="release-card">
      <div class="release-meta">
        <p class="eyebrow">${e.release_type||"release"}</p>
        <h3>${e.title}</h3>
        <p>${e.description||"A new FAQUIT release."}</p>
      </div>
      <div class="release-meta">
        <p>${e.release_date||"TBA"}</p>
      </div>
    </article>
  `}function y({title:e,socials:i}){return`
    <nav class="navbar">
      <div class="brand">${e}</div>
      <div class="nav-links">
        <a href="#releases">Releases</a>
        <a href="https://github.com/Fackyd1/FAQUIT" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div class="social-list">
        ${i.map(r=>`<a href="${r.url}" target="_blank" rel="noreferrer">${r.platform}</a>`).join("")}
      </div>
    </nav>
  `}const p=(e,i)=>`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" rx="48" fill="#120a24"/><circle cx="260" cy="250" r="180" fill="${i}" fill-opacity="0.55"/><circle cx="560" cy="520" r="200" fill="#fff" fill-opacity="0.14"/><rect x="140" y="140" width="520" height="520" rx="36" stroke="rgba(255,255,255,0.28)" stroke-width="12" fill="none"/><text x="400" y="420" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="56" font-weight="700" fill="#f7f4ff">${e}</text></svg>`)}`,v=[{title:"Nebula Bloom",description:"An atmospheric release that blends cinematic synths and intimate vocals.",release_type:"EP",release_date:"2026"},{title:"Velvet Static",description:"A nocturnal release designed for late-night listening and motion-driven visuals.",release_type:"Single",release_date:"2025"}],h=[{title:"Afterglow",description:"Immersive soundscapes wrapped in a luminous, modern pulse.",audio_type:"local"}],g=[{title:"Aurora Frame",description:"A still from a night-driven visual experiment.",media_url:p("AURORA","#7b5cff")},{title:"Pulse Study",description:"A minimal composition built around depth and motion.",media_url:p("PULSE","#ff5fa2")}],b=[{platform:"Email",url:"mailto:gaspardoval1@gmail.com"},{platform:"LinkedIn",url:"https://www.linkedin.com/in/gaspar-doval-stegmann-295594182/"},{platform:"WhatsApp",url:"https://wa.me/5493434525424"}];function A({settings:e={},releases:i=[],songs:r=[],gallery:t=[],socials:s=[]}={}){const a=e&&typeof e=="object"?e:{},l=Array.isArray(i)&&i.length?i:v,d=Array.isArray(r)&&r.length?r:h,u=Array.isArray(t)&&t.length?t:g,n=Array.isArray(s)&&s.length?s:b;return{title:a.site_title||"FAQUIT",heroText:a.hero_text||"A web visual experience.",heroSubtitle:a.hero_subtitle||"Immersive audio, cinematic visuals, and a magnetic digital presence.",heroDescription:a.hero_description||"A premium, immersive and dynamic web design.",releases:l,songs:d,gallery:u,socials:n}}const w=document.getElementById("app"),o={settings:{},releases:[],songs:[],gallery:[],socials:[]};async function _(){try{const[e,i,r,t,s]=await Promise.all([fetch(`${c.BASE_URL}/releases`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/songs`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/gallery`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/socials`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/settings`).catch(()=>({ok:!1,json:async()=>({})}))]),[a,l,d,u,n]=await Promise.all([e.json(),i.json(),r.json(),t.json(),s.json()]);o.releases=Array.isArray(a)?a:[],o.songs=Array.isArray(l)?l:[],o.gallery=Array.isArray(d)?d:[],o.socials=Array.isArray(u)?u:[],o.settings=n&&typeof n=="object"?n:{}}catch(e){o.releases=[],o.songs=[],o.gallery=[],o.socials=[],o.settings={},console.error(e)}finally{$()}}function $(){const e=A({settings:o.settings,releases:o.releases,songs:o.songs,gallery:o.gallery,socials:o.socials});w.innerHTML=`
    <div class="page-shell">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      ${y({title:e.title,socials:e.socials})}
      <main class="hero-panel">
        <section class="hero-copy reveal">
          <p class="eyebrow">/FACKYD</p>
          <h1>${e.heroText}</h1>
          <p class="hero-subtitle">${e.heroSubtitle}</p>
          <p class="hero-description">${e.heroDescription}</p>
          <div class="hero-actions">
            <a href="#releases" class="primary-link">Explore releases</a>
            <a href="https://github.com/Fackyd1/FAQUIT" target="_blank" rel="noreferrer" class="secondary-link">GitHub</a>
          </div>
        </section>
        <section class="hero-music reveal">
          ${f({songs:e.songs,title:e.title})}
        </section>
      </main>

      <section id="releases" class="section-block reveal">
        <div class="section-heading">
          <p class="eyebrow">Catalog</p>
          <h2>Releases</h2>
        </div>
        <div class="release-list">
          ${e.releases.map(t=>m({release:t})).join("")}
        </div>
      </section>

      <section id="github" class="section-block reveal">
        <div class="section-heading">
          <p class="eyebrow">Code</p>
          <h2>GitHub</h2>
        </div>
        <div class="release-list">
          <article class="release-card">
            <div class="release-meta">
              <p class="eyebrow">Repository</p>
              <h3>Open my GitHub</h3>
              <p>Check out all the code, projects and current work on GitHub.</p>
            </div>
            <div class="release-meta">
              <a href="https://github.com/Fackyd1" target="_blank" rel="noreferrer" class="secondary-link">Go to GitHub</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  `,requestAnimationFrame(()=>{document.querySelectorAll(".reveal").forEach((t,s)=>{t.style.transitionDelay=`${s*120}ms`,t.classList.add("is-visible")})});function i(){const t=document.createElement("div");t.className="cv-overlay",t.innerHTML=`
      <div class="cv-frame" role="dialog" aria-modal="true">
        <button class="cv-close" aria-label="Close CV">✕</button>
        <iframe src="/cv" title="Gaspar CV 2026"></iframe>
      </div>
    `,document.body.appendChild(t);function s(){t.remove(),document.removeEventListener("keydown",a)}function a(l){l.key==="Escape"&&s()}t.querySelector(".cv-close").addEventListener("click",s),t.addEventListener("click",l=>{l.target===t&&s()}),document.addEventListener("keydown",a)}const r=document.querySelector(".open-cv-btn");r&&r.addEventListener("click",i)}_();
