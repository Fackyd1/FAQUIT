export function Gallery({ items }) {
  return items.map((item) => `
    <article class="gallery-card">
      <img src="${item.media_url}" alt="${item.title || 'Gallery item'}" />
      <div style="margin-top: 10px;">
        <strong>${item.title || 'Visual'}</strong>
        <p>${item.description || ''}</p>
      </div>
    </article>
  `).join('');
}
