export function CVViewer() {
  return `
    <div class="cv-container">
      <iframe 
        class="cv-iframe" 
        src="/cv#toolbar=1&navpanes=0&scrollbar=1" 
        title="Curriculum Vitae"
        allow="fullscreen">
      </iframe>
    </div>
  `;
}
