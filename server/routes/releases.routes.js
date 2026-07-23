import express from 'express';
import { getReleaseBySlug, getReleases } from '../controllers/releases.controller.js';

const router = express.Router();
router.get('/', getReleases);
router.get('/:slug', getReleaseBySlug);

export default router;
