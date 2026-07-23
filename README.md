# FAQUIT Music Platform

FAQUIT now runs as a music-first platform with a Node.js/Express API, a MySQL-backed content layer, and a premium public frontend.

## Stack
- Frontend: Vite + vanilla JavaScript + CSS
- Backend: Express + MySQL + JWT + multer
- Database: MySQL 8+

## Quick start
1. Create the database and import SQL files:
   - `mysql -u root -p < database/schema.sql`
   - `mysql -u root -p < database/seed.sql`
2. Copy `.env.example` to `.env` and update values.
3. Install dependencies:
   - `npm install`
4. Start the app:
   - `npm run dev`

## Admin
- Public site: http://localhost:5173
- Admin login removed from public documentation
- Default seeded admin user:
  - username: `faquit`
  - password: `faquit123`

## Production notes
- Set `NODE_ENV=production` and update `CLIENT_URL`.
- Keep uploads on persistent storage.
- Configure HTTPS and a managed MySQL instance.
