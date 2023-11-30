require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const routerArtists = require('./routes/artists');
const router = require('./routes');
const { URL } = process.env;


app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${URL}`)
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/index', router);
app.use('/artist', routerArtists);

module.exports = app;