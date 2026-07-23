(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}})();const v={BASE_URL:"/api"};function f(){return`
    <div class="cv-wrapper">
      <div class="cv-content">
        <div class="cv-section">
          <p class="cv-eyebrow">AVAILABILITY</p>
          <p class="cv-highlight">Full-Time</p>
        </div>

        <div class="cv-section">
          <p class="cv-eyebrow">EXPERIENCE</p>
          <div class="cv-item">
            <div class="cv-item-header">
              <span class="cv-role">Customer Service</span>
              <span class="cv-date">Mar 2020 – Sep 2021</span>
            </div>
            <p class="cv-company">Gareis Impresiones</p>
          </div>
          <div class="cv-item">
            <div class="cv-item-header">
              <span class="cv-role">Baker Assistant</span>
              <span class="cv-date">Sep 2021 – Feb 2022</span>
            </div>
          </div>
          <div class="cv-item">
            <div class="cv-item-header">
              <span class="cv-role">Programmer</span>
              <span class="cv-date">Mar 2022 – Feb 2023</span>
            </div>
            <p class="cv-company">Integral Software</p>
          </div>
          <div class="cv-item">
            <div class="cv-item-header">
              <span class="cv-role">Administrative & Community Manager</span>
              <span class="cv-date">Jul 2024 – Feb 2026</span>
            </div>
            <p class="cv-company">Restituo</p>
          </div>
        </div>

        <div class="cv-section">
          <p class="cv-eyebrow">EDUCATION</p>
          <div class="cv-item">
            <p class="cv-role">Technical High School</p>
            <p class="cv-company">Technical School nº35</p>
          </div>
          <div class="cv-item">
            <p class="cv-role">Computer Science & Audit (Degree)</p>
            <p class="cv-company">ESBA</p>
          </div>
          <div class="cv-item">
            <p class="cv-role">Programming (In Progress)</p>
            <p class="cv-company">Universidad Tecnológica Nacional (UTN)</p>
          </div>
          <div class="cv-item">
            <p class="cv-role">Technical Art</p>
            <p class="cv-company">UTN</p>
          </div>
          <div class="cv-item">
            <p class="cv-role">Community Management</p>
            <p class="cv-company">Universidad de Buenos Aires (UBA)</p>
          </div>
        </div>

        <div class="cv-section">
          <p class="cv-eyebrow">SKILLS</p>
          <div class="skills-grid">
            <div class="skill-tag">JavaScript</div>
            <div class="skill-tag">React</div>
            <div class="skill-tag">Node.js</div>
            <div class="skill-tag">Express</div>
            <div class="skill-tag">SQL</div>
            <div class="skill-tag">PostgreSQL</div>
            <div class="skill-tag">MongoDB</div>
            <div class="skill-tag">HTML/CSS</div>
            <div class="skill-tag">Git</div>
            <div class="skill-tag">REST APIs</div>
            <div class="skill-tag">Web Design</div>
            <div class="skill-tag">Problem Solving</div>
          </div>
        </div>

        <button type="button" class="open-cv-btn" aria-label="Open Full CV PDF">
          <span class="cv-icon">📄</span>
          <span class="cv-text">View Full CV PDF</span>
        </button>
      </div>
    </div>

    <div class="cv-modal" id="cvModal">
      <div class="cv-modal-backdrop"></div>
      <div class="cv-modal-content">
        <button type="button" class="close-cv-btn" aria-label="Close CV">✕</button>
        <iframe 
          class="cv-iframe" 
          src="/cv#toolbar=1&navpanes=0&scrollbar=1" 
          title="Curriculum Vitae"
          allow="fullscreen">
        </iframe>
      </div>
    </div>
  `}function p({release:e}){var s;const a=e.github_url||`https://github.com/Fackyd1/${((s=e.title)==null?void 0:s.replace(/\s+/g,"-"))||"FAQUIT"}`,l=a.startsWith("http"),i=`
    <div class="release-meta">
      <p class="eyebrow">${e.release_type||"release"}</p>
      <h3>${e.title}</h3>
      <p>${e.description||"A new FAQUIT release."}</p>
    </div>
    <div class="release-meta">
      <p>${e.release_date||"TBA"}</p>
    </div>
  `;return l?`
      <a href="${a}" target="_blank" rel="noreferrer" class="release-card-link">
        <article class="release-card">
          ${i}
        </article>
      </a>
    `:`
    <article class="release-card">
      ${i}
    </article>
  `}function g({title:e,socials:a}){return`
    <nav class="navbar">
      <div class="brand">${e}</div>
      <div class="nav-links">
        <a href="#releases">Releases</a>
        <a href="https://github.com/Fackyd1/FAQUIT" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div class="social-list">
        ${a.map(l=>`<a href="${l.url}" target="_blank" rel="noreferrer">${l.platform}</a>`).join("")}
      </div>
    </nav>
  `}const m=(e,a)=>`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" rx="48" fill="#120a24"/><circle cx="260" cy="250" r="180" fill="${a}" fill-opacity="0.55"/><circle cx="560" cy="520" r="200" fill="#fff" fill-opacity="0.14"/><rect x="140" y="140" width="520" height="520" rx="36" stroke="rgba(255,255,255,0.28)" stroke-width="12" fill="none"/><text x="400" y="420" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="56" font-weight="700" fill="#f7f4ff">${e}</text></svg>`)}`,h=[{title:"Nebula Bloom",description:"An atmospheric release that blends cinematic synths and intimate vocals.",release_type:"EP",release_date:"2026"},{title:"Velvet Static",description:"A nocturnal release designed for late-night listening and motion-driven visuals.",release_type:"Single",release_date:"2025"}],y=[{title:"Afterglow",description:"Immersive soundscapes wrapped in a luminous, modern pulse.",audio_type:"local"}],b=[{title:"Aurora Frame",description:"A still from a night-driven visual experiment.",media_url:m("AURORA","#7b5cff")},{title:"Pulse Study",description:"A minimal composition built around depth and motion.",media_url:m("PULSE","#ff5fa2")}],A=[{platform:"Email",url:"mailto:gaspardoval1@gmail.com"},{platform:"LinkedIn",url:"https://www.linkedin.com/in/gaspar-doval-stegmann-295594182/"},{platform:"WhatsApp",url:"https://wa.me/5493434525424"}];function k({settings:e={},releases:a=[],songs:l=[],gallery:i=[],socials:s=[]}={}){const t=e&&typeof e=="object"?e:{},r=Array.isArray(a)&&a.length?a:h,o=Array.isArray(l)&&l.length?l:y,d=Array.isArray(i)&&i.length?i:b,n=Array.isArray(s)&&s.length?s:A;return{title:t.site_title||"FAQUIT",heroText:t.hero_text||"A web visual experience.",heroSubtitle:t.hero_subtitle||"Immersive audio, cinematic visuals, and a magnetic digital presence.",heroDescription:t.hero_description||"A premium, immersive and dynamic web design.",releases:r,songs:o,gallery:d,socials:n}}const w=document.getElementById("app"),c={settings:{},releases:[],songs:[],gallery:[],socials:[]};async function S(){try{const[e,a,l,i,s]=await Promise.all([fetch(`${v.BASE_URL}/releases`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${v.BASE_URL}/songs`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${v.BASE_URL}/gallery`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${v.BASE_URL}/socials`).catch(()=>({ok:!1,json:async()=>[]})),fetch(`${v.BASE_URL}/settings`).catch(()=>({ok:!1,json:async()=>({})}))]),[t,r,o,d,n]=await Promise.all([e.json(),a.json(),l.json(),i.json(),s.json()]);c.releases=Array.isArray(t)?t:[],c.songs=Array.isArray(r)?r:[],c.gallery=Array.isArray(o)?o:[],c.socials=Array.isArray(d)?d:[],c.settings=n&&typeof n=="object"?n:{}}catch(e){c.releases=[],c.songs=[],c.gallery=[],c.socials=[],c.settings={},console.error(e)}finally{L()}}function L(){const e=k({settings:c.settings,releases:c.releases,songs:c.songs,gallery:c.gallery,socials:c.socials});w.innerHTML=`
    <div class="page-shell">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      ${g({title:e.title,socials:e.socials})}
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
          ${f()}
        </section>
      </main>

      <section id="releases" class="section-block reveal">
        <div class="section-heading">
          <p class="eyebrow">Catalog</p>
          <h2>Releases</h2>
        </div>
        <div class="release-list">
          ${p({release:{title:"Web CV",release_type:"Project",description:"A premium immersive web experience showcasing my full-stack development skills, portfolio, and professional journey.",release_date:"2026",github_url:"https://github.com/Fackyd1/FAQUIT"}})}
          ${e.releases.map(a=>p({release:a})).join("")}
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
  `,requestAnimationFrame(()=>{document.querySelectorAll(".reveal").forEach((a,l)=>{a.style.transitionDelay=`${l*120}ms`,a.classList.add("is-visible")})}),setTimeout(()=>{const a=document.querySelector(".open-cv-btn");a&&a.addEventListener("click",l=>{l.preventDefault();const i=document.getElementById("cvModal");if(i){let r=function(){i.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",o)},o=function(u){u.key==="Escape"&&r()};var s=r,t=o;i.classList.add("active"),document.body.style.overflow="hidden";const d=i.querySelector(".close-cv-btn"),n=i.querySelector(".cv-modal-backdrop");d.addEventListener("click",r),n.addEventListener("click",r),document.addEventListener("keydown",o)}})},100)}S();
