import express from 'express';
import { getSocials } from '../controllers/socials.controller.js';

const router = express.Router();
router.get('/', getSocials);

export default router;
