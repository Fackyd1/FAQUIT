import { defineConfig } from 'vite';

const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: {
      '/api': 'http://127.0.0.1:3000'
    }
  }
});
