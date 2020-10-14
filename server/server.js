import express from 'express';
import dotenv from 'dotenv';
import albums from './data/albums.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/albums', (req, res) => {
    res.json(albums);
})

app.get('/api/albums/:id', (req, res) => {
    const album = albums.find(a => a._id === req.params.id);
    res.json(album);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
