import asyncHandler from 'express-async-handler';
import Album from '../models/albumModel.js';

export const getAlbums = asyncHandler (async (req, res) => {
    const albums = await Album.find({});

    res.json(albums);
});

export const getAlbum = asyncHandler (async (req, res) => {
    const album = await Album.findById(req.params.id);

    if (album) {
        res.json(album);
    } else {
        res.status(404);
        throw new Error('Album not found');
    }
});
