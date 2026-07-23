export function Navigation({ title, socials }) {
  return `
    <nav class="navbar">
      <div class="brand">${title}</div>
      <div class="nav-links">
        <a href="#releases">Releases</a>
        <a href="https://github.com/Fackyd1/FAQUIT" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div class="social-list">
        ${socials.map((social) => `<a href="${social.url}" target="_blank" rel="noreferrer">${social.platform}</a>`).join('')}
      </div>
    </nav>
  `;
}
