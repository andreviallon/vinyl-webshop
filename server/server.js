const express = require('express');
const albums = require('./data/albums');

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


app.listen(5000, console.log('Server running on port 5000'));
