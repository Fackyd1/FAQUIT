(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();const c={BASE_URL:"/api"};function u(){return`
    <div class="cv-container">
      <iframe 
        class="cv-iframe" 
        src="/cv#toolbar=1&navpanes=0&scrollbar=1" 
        title="Curriculum Vitae"
        allow="fullscreen">
      </iframe>
    </div>
  `}function h({release:e}){return`
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
  `}function m({title:e,socials:a}){return`
    <nav class="navbar">
      <div class="brand">${e}</div>
      <div class="nav-links">
        <a href="#releases">Releases</a>
        <a href="https://github.com/Fackyd1/FAQUIT" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div class="social-list">
        ${a.map(i=>`<a href="${i.url}" target="_blank" rel="noreferrer">${i.platform}</a>`).join("")}
      </div>
    </nav>
  `}const p=(e,a)=>`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" rx="48" fill="#120a24"/><circle cx="260" cy="250" r="180" fill="${a}" fill-opacity="0.55"/><circle cx="560" cy="520" r="200" fill="#fff" fill-opacity="0.14"/><rect x="140" y="140" width="520" height="520" rx="36" stroke="rgba(255,255,255,0.28)" stroke-width="12" fill="none"/><text x="400" y="420" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="56" font-weight="700" fill="#f7f4ff">${e}</text></svg>`)}`,y=[{title:"Nebula Bloom",description:"An atmospheric release that blends cinematic synths and intimate vocals.",release_type:"EP",release_date:"2026"},{title:"Velvet Static",description:"A nocturnal release designed for late-night listening and motion-driven visuals.",release_type:"Single",release_date:"2025"}],g=[{title:"Afterglow",description:"Immersive soundscapes wrapped in a luminous, modern pulse.",audio_type:"local"}],v=[{title:"Aurora Frame",description:"A still from a night-driven visual experiment.",media_url:p("AURORA","#7b5cff")},{title:"Pulse Study",description:"A minimal composition built around depth and motion.",media_url:p("PULSE","#ff5fa2")}],b=[{platform:"Email",url:"mailto:gaspardoval1@gmail.com"},{platform:"LinkedIn",url:"https://www.linkedin.com/in/gaspar-doval-stegmann-295594182/"},{platform:"WhatsApp",url:"https://wa.me/5493434525424"}];function A({settings:e={},releases:a=[],songs:i=[],gallery:l=[],socials:s=[]}={}){const t=e&&typeof e=="object"?e:{},o=Array.isArray(a)&&a.length?a:y,d=Array.isArray(i)&&i.length?i:g,f=Array.isArray(l)&&l.length?l:v,n=Array.isArray(s)&&s.length?s:b;return{title:t.site_title||"FAQUIT",heroText:t.hero_text||"A web visual experience.",heroSubtitle:t.hero_subtitle||"Immersive audio, cinematic visuals, and a magnetic digital presence.",heroDescription:t.hero_description||"A premium, immersive and dynamic web design.",releases:o,songs:d,gallery:f,socials:n}}const w=document.getElementById("app"),r={settings:{},releases:[],songs:[],gallery:[],socials:[]};async function _(){try{const[e,a,i,l,s]=await Promise.all([fetch(`${c.BASE_URL}/releases`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/songs`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/gallery`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/socials`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${c.BASE_URL}/settings`).catch(()=>({ok:!1,json:async()=>({})}))]),[t,o,d,f,n]=await Promise.all([e.json(),a.json(),i.json(),l.json(),s.json()]);r.releases=Array.isArray(t)?t:[],r.songs=Array.isArray(o)?o:[],r.gallery=Array.isArray(d)?d:[],r.socials=Array.isArray(f)?f:[],r.settings=n&&typeof n=="object"?n:{}}catch(e){r.releases=[],r.songs=[],r.gallery=[],r.socials=[],r.settings={},console.error(e)}finally{S()}}function S(){const e=A({settings:r.settings,releases:r.releases,songs:r.songs,gallery:r.gallery,socials:r.socials});w.innerHTML=`
    <div class="page-shell">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      ${m({title:e.title,socials:e.socials})}
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
          ${u()}
        </section>
      </main>

      <section id="releases" class="section-block reveal">
        <div class="section-heading">
          <p class="eyebrow">Catalog</p>
          <h2>Releases</h2>
        </div>
        <div class="release-list">
          ${e.releases.map(a=>h({release:a})).join("")}
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
  `,requestAnimationFrame(()=>{document.querySelectorAll(".reveal").forEach((a,i)=>{a.style.transitionDelay=`${i*120}ms`,a.classList.add("is-visible")})})}_();
