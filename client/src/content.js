const createSvg = (label, accent) => `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" rx="48" fill="#120a24"/><circle cx="260" cy="250" r="180" fill="${accent}" fill-opacity="0.55"/><circle cx="560" cy="520" r="200" fill="#fff" fill-opacity="0.14"/><rect x="140" y="140" width="520" height="520" rx="36" stroke="rgba(255,255,255,0.28)" stroke-width="12" fill="none"/><text x="400" y="420" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="56" font-weight="700" fill="#f7f4ff">${label}</text></svg>`)}`;

const defaultReleases = [
  {
    title: 'Nebula Bloom',
    description: 'An atmospheric release that blends cinematic synths and intimate vocals.',
    release_type: 'EP',
    release_date: '2026'
  },
  {
    title: 'Velvet Static',
    description: 'A nocturnal release designed for late-night listening and motion-driven visuals.',
    release_type: 'Single',
    release_date: '2025'
  }
];

const defaultSongs = [
  {
    title: 'Afterglow',
    description: 'Immersive soundscapes wrapped in a luminous, modern pulse.',
    audio_type: 'local'
  }
];

const defaultGallery = [
  {
    title: 'Aurora Frame',
    description: 'A still from a night-driven visual experiment.',
    media_url: createSvg('AURORA', '#7b5cff')
  },
  {
    title: 'Pulse Study',
    description: 'A minimal composition built around depth and motion.',
    media_url: createSvg('PULSE', '#ff5fa2')
  }
];

const defaultSocials = [
  { platform: 'Email', url: 'mailto:gaspardoval1@gmail.com' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/gaspar-doval-stegmann-295594182/' },
  { platform: 'WhatsApp', url: 'https://wa.me/5493434525424' }
];

export function resolveSiteState({ settings = {}, releases = [], songs = [], gallery = [], socials = [] } = {}) {
  const safeSettings = settings && typeof settings === 'object' ? settings : {};
  const safeReleases = Array.isArray(releases) && releases.length ? releases : defaultReleases;
  const safeSongs = Array.isArray(songs) && songs.length ? songs : defaultSongs;
  const safeGallery = Array.isArray(gallery) && gallery.length ? gallery : defaultGallery;
  const safeSocials = Array.isArray(socials) && socials.length ? socials : defaultSocials;

  return {
    title: safeSettings.site_title || 'FAQUIT',
    heroText: safeSettings.hero_text || 'A web visual experience.',
    heroSubtitle: safeSettings.hero_subtitle || 'Immersive audio, cinematic visuals, and a magnetic digital presence.',
    heroDescription: safeSettings.hero_description || 'A premium, immersive and dynamic web design.',
    releases: safeReleases,
    songs: safeSongs,
    gallery: safeGallery,
    socials: safeSocials
  };
}
