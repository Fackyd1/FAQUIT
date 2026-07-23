import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/dashboard', authMiddleware, (_req, res) => {
  res.json({ ok: true, message: 'Admin dashboard ready' });
});

export default router;
