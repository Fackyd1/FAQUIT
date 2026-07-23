export function ReleaseCard({ release }) {
  const githubUrl = release.github_url || `https://github.com/Fackyd1/${release.title?.replace(/\s+/g, '-') || 'FAQUIT'}`;
  const isExternalLink = githubUrl.startsWith('http');
  
  const cardContent = `
    <div class="release-meta">
      <p class="eyebrow">${release.release_type || 'release'}</p>
      <h3>${release.title}</h3>
      <p>${release.description || 'A new FAQUIT release.'}</p>
    </div>
    <div class="release-meta">
      <p>${release.release_date || 'TBA'}</p>
    </div>
  `;

  if (isExternalLink) {
    return `
      <a href="${githubUrl}" target="_blank" rel="noreferrer" class="release-card-link">
        <article class="release-card">
          ${cardContent}
        </article>
      </a>
    `;
  }

  return `
    <article class="release-card">
      ${cardContent}
    </article>
  `;
}
