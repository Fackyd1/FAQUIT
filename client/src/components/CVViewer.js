export function CVViewer() {
  return `
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
  `;
}
