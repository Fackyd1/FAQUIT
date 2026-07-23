import { pool } from '../config/database.js';
import { body, validationResult } from 'express-validator';
import { getFallbackResponse, isDatabaseUnavailable } from '../utils/fallback.js';

export const getSongs = async (req, res, next) => {
  try {
    let query = 'SELECT * FROM songs WHERE 1=1';
    const params = [];

    if (req.query.artist) {
      query += ' AND artist_id = (SELECT id FROM artists WHERE slug = ? LIMIT 1)';
      params.push(req.query.artist);
    }

    if (req.query.featured === 'true') {
      query += ' AND is_featured = 1';
    }

    if (req.query.published === 'true') {
      query += ' AND is_published = 1';
    }

    if (req.query.audio_type) {
      query += ' AND audio_type = ?';
      params.push(req.query.audio_type);
    }

    query += ' ORDER BY created_at DESC';
    const [songs] = await pool.query(query, params);
    res.json(songs);
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return res.json(getFallbackResponse('songs'));
    }
    next(error);
  }
};

export const getSongBySlug = async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM songs WHERE slug = ? LIMIT 1', [req.params.slug]);
    if (!rows.length) return res.status(404).json({ message: 'Song not found' });
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createSong = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { artist_id, title, description, audio_type, audio_url, soundcloud_url, spotify_url, youtube_url, apple_music_url, is_featured, is_published } = req.body;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const [artistRows] = await pool.query('SELECT id FROM artists WHERE id = ? LIMIT 1', [artist_id]);
    if (!artistRows.length) return res.status(400).json({ message: 'Invalid artist_id' });

    const [result] = await pool.query(
      `INSERT INTO songs (artist_id, title, slug, description, audio_type, audio_url, soundcloud_url, spotify_url, youtube_url, apple_music_url, is_featured, is_published, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [artist_id, title, slug, description || '', audio_type, audio_url || null, soundcloud_url || null, spotify_url || null, youtube_url || null, apple_music_url || null, is_featured ? 1 : 0, is_published ? 1 : 0]
    );

    const [rows] = await pool.query('SELECT * FROM songs WHERE id = ? LIMIT 1', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (error) {
    next(error);
  }
};

export const uploadSongFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No audio file uploaded' });
    }
    const audioUrl = `/uploads/audio/${req.file.filename}`;
    res.json({ audio_url: audioUrl, filename: req.file.filename });
  } catch (error) {
    next(error);
  }
};

export const songValidationRules = [
  (req, _res, next) => {
    const { title, artist_id, audio_type, audio_url, soundcloud_url } = req.body;
    if (!title || !title.trim()) return next(new Error('Title is required'));
    if (!artist_id) return next(new Error('artist_id is required'));
    if (!['local', 'soundcloud', 'external'].includes(audio_type)) return next(new Error('Invalid audio_type'));
    if (audio_type === 'soundcloud' && !soundcloud_url) return next(new Error('soundcloud_url is required for soundcloud audio_type'));
    if (audio_type === 'local' && !audio_url) return next(new Error('audio_url is required for local audio_type'));
    next();
  }
];
