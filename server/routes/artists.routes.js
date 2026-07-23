import express from 'express';
import { getArtists, getArtistBySlug } from '../controllers/artists.controller.js';

const router = express.Router();
router.get('/', getArtists);
router.get('/:slug', getArtistBySlug);

export default router;
