const express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('dotenv').config();
const mongoose = require('./config/dbInitialize');
const path = require('path');
const cors = require('cors');

//configuração de web socket
const server = require('http').Server(app);
const io = require('socker.io')(server);
// mandar io por middlewares
app.use((req, res, next) => {
    req.io = io;
    next();
})

const PORT = 3333;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(require("./routes"));

// arquivos estaticos, rotas para isso
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

server.listen(PORT, () => {
    console.log(`The server is online in port: ${PORT}`);
})

