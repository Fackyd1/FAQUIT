export function MusicPlayer({ songs, title }) {
  const active = songs[0] || {};
  const source = active.audio_type === 'soundcloud' && active.soundcloud_url
    ? `<iframe title="SoundCloud player" width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(active.soundcloud_url)}&color=%23f0e6ff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false"></iframe>`
    : `<audio controls preload="metadata" src="${active.audio_url || ''}"></audio>`;

  return `
    <div class="player-card">
      <div class="player-header">
        <div>
          <p class="eyebrow">Now playing</p>
          <div class="track-title">${active.title || title}</div>
        </div>
        <div class="controls">
          <button type="button">⏮</button>
          <button type="button">▶</button>
          <button type="button">⏭</button>
          <button type="button" class="open-cv-btn" aria-label="Open CV">📄 CV</button>
        </div>
      </div>
      <div>${source}</div>
      <div class="progress-row">
        <span>00:00</span>
        <input type="range" value="0" />
        <span>00:00</span>
      </div>
      <p class="hero-description">${active.description || 'Dynamic audio playback with local files or SoundCloud embeds.'}</p>
    </div>
  `;
}
