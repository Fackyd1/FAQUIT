import { pool } from '../config/database.js';
import { getFallbackResponse, isDatabaseUnavailable } from '../utils/fallback.js';

export const getReleases = async (_req, res, next) => {
  try {
    const [rows] = await pool.query(
      `SELECT r.*, a.name as artist_name
       FROM releases r
       LEFT JOIN artists a ON a.id = r.artist_id
       WHERE r.status = 'published'
       ORDER BY r.release_date DESC, r.created_at DESC`
    );
    res.json(rows);
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return res.json(getFallbackResponse('releases'));
    }
    next(error);
  }
};

export const getReleaseBySlug = async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM releases WHERE slug = ? LIMIT 1', [req.params.slug]);
    if (!rows.length) return res.status(404).json({ message: 'Release not found' });
    res.json(rows[0]);
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return res.status(404).json({ message: 'Release not found' });
    }
    next(error);
  }
};
