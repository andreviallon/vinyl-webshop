import express from 'express';
import { getAlbums, getAlbum } from '../controllers/albumController.js';

const router = express.Router();

router.route('/').get(getAlbums);
router.route('/:id').get(getAlbum);

export default router;
