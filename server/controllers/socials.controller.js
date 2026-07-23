import { pool } from '../config/database.js';
import { getFallbackResponse, isDatabaseUnavailable } from '../utils/fallback.js';

export const getSocials = async (_req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM social_links WHERE is_active = 1 ORDER BY platform ASC');
    res.json(rows);
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return res.json(getFallbackResponse('socials'));
    }
    next(error);
  }
};
