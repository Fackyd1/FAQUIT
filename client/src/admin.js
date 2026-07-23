import './style.css';

const app = document.getElementById('app');
const token = localStorage.getItem('faquit-token');

if (!token) {
  app.innerHTML = `
    <div class="page-shell">
      <h1>Admin login</h1>
      <form id="login-form" class="player-card">
        <input id="username" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (!response.ok) {
      app.innerHTML = `<div class="error-state">${data.message || 'Login failed'}</div>`;
      return;
    }
    localStorage.setItem('faquit-token', data.token);
    window.location.href = '/admin/dashboard.html';
  });
} else {
  app.innerHTML = '<div class="page-shell"><h1>Admin dashboard</h1><p>Ready for CRUD workflows.</p></div>';
}
