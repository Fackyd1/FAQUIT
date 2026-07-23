import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, '..', process.env.UPLOAD_AUDIO_DIR || 'uploads/audio');

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (_req, file, cb) => {
  const allowed = ['.mp3', '.wav', '.ogg', '.m4a'];
  const ext = path.extname(file.originalname).toLowerCase();
  const mimeAllowed = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4', 'audio/x-m4a'];
  if (allowed.includes(ext) && mimeAllowed.includes(file.mimetype)) {
    cb(null, true);
    return;
  }
  cb(new Error('Invalid audio file'));
};

export const uploadAudio = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter
});
