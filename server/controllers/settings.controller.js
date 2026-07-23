import { pool } from '../config/database.js';
import { getFallbackResponse, isDatabaseUnavailable } from '../utils/fallback.js';

export const getSettings = async (_req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT setting_key, setting_value FROM site_settings');
    const data = Object.fromEntries(rows.map((row) => [row.setting_key, row.setting_value]));
    res.json(data);
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return res.json(getFallbackResponse('settings'));
    }
    next(error);
  }
};
