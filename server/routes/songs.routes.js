import express from 'express';
import { createSong, getSongBySlug, getSongs, songValidationRules, uploadSongFile } from '../controllers/songs.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { uploadAudio } from '../middleware/upload.middleware.js';

const router = express.Router();
router.get('/', getSongs);
router.get('/:slug', getSongBySlug);
router.post('/', authMiddleware, songValidationRules, createSong);
router.post('/upload', authMiddleware, uploadAudio.single('audio'), uploadSongFile);

export default router;
