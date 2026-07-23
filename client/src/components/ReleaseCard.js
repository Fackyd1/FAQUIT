export function ReleaseCard({ release }) {
  return `
    <article class="release-card">
      <div class="release-meta">
        <p class="eyebrow">${release.release_type || 'release'}</p>
        <h3>${release.title}</h3>
        <p>${release.description || 'A new FAQUIT release.'}</p>
      </div>
      <div class="release-meta">
        <p>${release.release_date || 'TBA'}</p>
      </div>
    </article>
  `;
}
