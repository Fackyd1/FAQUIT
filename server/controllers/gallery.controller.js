import { pool } from '../config/database.js';
import { getFallbackResponse, isDatabaseUnavailable } from '../utils/fallback.js';

export const getGallery = async (_req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM gallery_items WHERE is_published = 1 ORDER BY sort_order ASC, created_at DESC');
    res.json(rows);
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return res.json(getFallbackResponse('gallery'));
    }
    next(error);
  }
};
