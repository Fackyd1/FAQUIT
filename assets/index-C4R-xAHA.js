(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}})();const p={BASE_URL:"/api"};function v(){return`
    <div class="cv-card">
      <div class="cv-header">
        <p class="eyebrow">Curriculum</p>
        <h3>CV</h3>
      </div>
      <button type="button" class="open-cv-btn" aria-label="Open CV">
        <span class="cv-icon">📄</span>
        <span class="cv-text">View Full CV</span>
      </button>
    </div>

    <div class="cv-modal" id="cvModal">
      <div class="cv-modal-backdrop"></div>
      <div class="cv-modal-content">
        <button type="button" class="close-cv-btn" aria-label="Close CV">✕</button>
        <iframe class="cv-iframe" src="./Gaspar%20CV%202026%20.pdf" title="Curriculum Vitae"></iframe>
      </div>
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
  `}function h({title:e,socials:r}){return`
    <nav class="navbar">
      <div class="brand">${e}</div>
      <div class="nav-links">
        <a href="#releases">Releases</a>
        <a href="https://github.com/Fackyd1/FAQUIT" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div class="social-list">
        ${r.map(l=>`<a href="${l.url}" target="_blank" rel="noreferrer">${l.platform}</a>`).join("")}
      </div>
    </nav>
  `}const u=(e,r)=>`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" rx="48" fill="#120a24"/><circle cx="260" cy="250" r="180" fill="${r}" fill-opacity="0.55"/><circle cx="560" cy="520" r="200" fill="#fff" fill-opacity="0.14"/><rect x="140" y="140" width="520" height="520" rx="36" stroke="rgba(255,255,255,0.28)" stroke-width="12" fill="none"/><text x="400" y="420" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="56" font-weight="700" fill="#f7f4ff">${e}</text></svg>`)}`,y=[{title:"Nebula Bloom",description:"An atmospheric release that blends cinematic synths and intimate vocals.",release_type:"EP",release_date:"2026"},{title:"Velvet Static",description:"A nocturnal release designed for late-night listening and motion-driven visuals.",release_type:"Single",release_date:"2025"}],g=[{title:"Afterglow",description:"Immersive soundscapes wrapped in a luminous, modern pulse.",audio_type:"local"}],b=[{title:"Aurora Frame",description:"A still from a night-driven visual experiment.",media_url:u("AURORA","#7b5cff")},{title:"Pulse Study",description:"A minimal composition built around depth and motion.",media_url:u("PULSE","#ff5fa2")}],A=[{platform:"Email",url:"mailto:gaspardoval1@gmail.com"},{platform:"LinkedIn",url:"https://www.linkedin.com/in/gaspar-doval-stegmann-295594182/"},{platform:"WhatsApp",url:"https://wa.me/5493434525424"}];function w({settings:e={},releases:r=[],songs:l=[],gallery:a=[],socials:s=[]}={}){const t=e&&typeof e=="object"?e:{},o=Array.isArray(r)&&r.length?r:y,n=Array.isArray(l)&&l.length?l:g,d=Array.isArray(a)&&a.length?a:b,c=Array.isArray(s)&&s.length?s:A;return{title:t.site_title||"FAQUIT",heroText:t.hero_text||"A web visual experience.",heroSubtitle:t.hero_subtitle||"Immersive audio, cinematic visuals, and a magnetic digital presence.",heroDescription:t.hero_description||"A premium, immersive and dynamic web design.",releases:o,songs:n,gallery:d,socials:c}}const k=document.getElementById("app"),i={settings:{},releases:[],songs:[],gallery:[],socials:[]};async function S(){try{const[e,r,l,a,s]=await Promise.all([fetch(`${p.BASE_URL}/releases`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${p.BASE_URL}/songs`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${p.BASE_URL}/gallery`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${p.BASE_URL}/socials`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${p.BASE_URL}/settings`).catch(()=>({ok:!1,json:async()=>({})}))]),[t,o,n,d,c]=await Promise.all([e.json(),r.json(),l.json(),a.json(),s.json()]);i.releases=Array.isArray(t)?t:[],i.songs=Array.isArray(o)?o:[],i.gallery=Array.isArray(n)?n:[],i.socials=Array.isArray(d)?d:[],i.settings=c&&typeof c=="object"?c:{}}catch(e){i.releases=[],i.songs=[],i.gallery=[],i.socials=[],i.settings={},console.error(e)}finally{_()}}function _(){const e=w({settings:i.settings,releases:i.releases,songs:i.songs,gallery:i.gallery,socials:i.socials});k.innerHTML=`
    <div class="page-shell">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      ${h({title:e.title,socials:e.socials})}
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
        <section class="hero-cv reveal">
          ${v()}
        </section>
      </main>

      <section id="releases" class="section-block reveal">
        <div class="section-heading">
          <p class="eyebrow">Catalog</p>
          <h2>Releases</h2>
        </div>
        <div class="release-list">
          ${e.releases.map(a=>m({release:a})).join("")}
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
  `,requestAnimationFrame(()=>{document.querySelectorAll(".reveal").forEach((a,s)=>{a.style.transitionDelay=`${s*120}ms`,a.classList.add("is-visible")})});function r(){const a=document.getElementById("cvModal");if(a){let o=function(){a.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",n)},n=function(f){f.key==="Escape"&&o()};var s=o,t=n;a.classList.add("active"),document.body.style.overflow="hidden";const d=a.querySelector(".close-cv-btn"),c=a.querySelector(".cv-modal-backdrop");d.addEventListener("click",o,{once:!0}),c.addEventListener("click",o,{once:!0}),document.addEventListener("keydown",n)}}const l=document.querySelector(".open-cv-btn");l&&l.addEventListener("click",r)}S();
