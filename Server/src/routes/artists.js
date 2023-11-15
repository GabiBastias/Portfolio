const express = require('express');
const routerArtists = express.Router();

routerArtists.get('/', (req, res, next) => {
    try {
        return res.status(200).send('Acá van a haber artistas.')
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
});

module.exports = routerArtists;