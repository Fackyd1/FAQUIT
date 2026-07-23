import { pool } from '../config/database.js';

export const getArtists = async (_req, res, next) => {
  try {
    const [artists] = await pool.query('SELECT * FROM artists ORDER BY name ASC');
    res.json(artists);
  } catch (error) {
    next(error);
  }
};

export const getArtistBySlug = async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM artists WHERE slug = ? LIMIT 1', [req.params.slug]);
    if (!rows.length) return res.status(404).json({ message: 'Artist not found' });
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};
