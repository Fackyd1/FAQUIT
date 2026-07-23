import './style.css';
import { API_CONFIG } from './config.js';
import { MusicPlayer } from './components/MusicPlayer.js';
import { ReleaseCard } from './components/ReleaseCard.js';
import { Gallery } from './components/Gallery.js';
import { Navigation } from './components/Navigation.js';
import { resolveSiteState } from './content.js';

const app = document.getElementById('app');

const state = {
  settings: {},
  releases: [],
  songs: [],
  gallery: [],
  socials: []
};

async function loadData() {
  try {
    const [releasesRes, songsRes, galleryRes, socialsRes, settingsRes] = await Promise.all([
      fetch(`${API_CONFIG.BASE_URL}/releases`).catch(() => ({ ok: false, json: async () => [] })),
      fetch(`${API_CONFIG.BASE_URL}/songs`).catch(() => ({ ok: false, json: async () => [] })),
      fetch(`${API_CONFIG.BASE_URL}/gallery`).catch(() => ({ ok: false, json: async () => [] })),
      fetch(`${API_CONFIG.BASE_URL}/socials`).catch(() => ({ ok: false, json: async () => [] })),
      fetch(`${API_CONFIG.BASE_URL}/settings`).catch(() => ({ ok: false, json: async () => ({}) }))
    ]);

    const [releases, songs, gallery, socials, settings] = await Promise.all([
      releasesRes.json(),
      songsRes.json(),
      galleryRes.json(),
      socialsRes.json(),
      settingsRes.json()
    ]);

    state.releases = Array.isArray(releases) ? releases : [];
    state.songs = Array.isArray(songs) ? songs : [];
    state.gallery = Array.isArray(gallery) ? gallery : [];
    state.socials = Array.isArray(socials) ? socials : [];
    state.settings = settings && typeof settings === 'object' ? settings : {};
  } catch (error) {
    state.releases = [];
    state.songs = [];
    state.gallery = [];
    state.socials = [];
    state.settings = {};
    console.error(error);
  } finally {
    render();
  }
}

function render() {
  const site = resolveSiteState({
    settings: state.settings,
    releases: state.releases,
    songs: state.songs,
    gallery: state.gallery,
    socials: state.socials
  });

  app.innerHTML = `
    <div class="page-shell">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      ${Navigation({ title: site.title, socials: site.socials })}
      <main class="hero-panel">
        <section class="hero-copy reveal">
          <p class="eyebrow">/FACKYD</p>
          <h1>${site.heroText}</h1>
          <p class="hero-subtitle">${site.heroSubtitle}</p>
          <p class="hero-description">${site.heroDescription}</p>
          <div class="hero-actions">
            <a href="#releases" class="primary-link">Explore releases</a>
            <a href="https://github.com/Fackyd1/FAQUIT" target="_blank" rel="noreferrer" class="secondary-link">GitHub</a>
          </div>
        </section>
        <section class="hero-music reveal">
          ${MusicPlayer({ songs: site.songs, title: site.title })}
        </section>
      </main>

      <section id="releases" class="section-block reveal">
        <div class="section-heading">
          <p class="eyebrow">Catalog</p>
          <h2>Releases</h2>
        </div>
        <div class="release-list">
          ${site.releases.map((release) => ReleaseCard({ release })).join('')}
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
  `;

  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach((element, index) => {
      element.style.transitionDelay = `${index * 120}ms`;
      element.classList.add('is-visible');
    });
  });

  // Attach CV button handler: open modal with PDF viewer
  function openCV() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'cv-overlay';
    overlay.innerHTML = `
      <div class="cv-frame" role="dialog" aria-modal="true">
        <button class="cv-close" aria-label="Close CV">✕</button>
        <iframe src="/cv" title="Gaspar CV 2026"></iframe>
      </div>
    `;
    document.body.appendChild(overlay);

    function close() {
      overlay.remove();
      document.removeEventListener('keydown', escHandler);
    }

    function escHandler(e) { if (e.key === 'Escape') close(); }
    overlay.querySelector('.cv-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', escHandler);
  }

  const cvBtn = document.querySelector('.open-cv-btn');
  if (cvBtn) cvBtn.addEventListener('click', openCV);
}

loadData();
