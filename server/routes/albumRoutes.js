import express from 'express';
import asyncHandler from 'express-async-handler';
import Album from '../models/albumModel.js';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const albums = await Album.find({})
    res.json(albums);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const album = await Album.findById(req.params.id);

    if (album) {
        res.json(album);
    } else {
        res.status(404).json({ message: 'Album not found' });
    }
}));

export default router;
