const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./src/config/database');
const path =require('path');

app.use(cors());

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Cria rooms separadas para quando fazer upload numa box, não apareça nas outras
io.sockets.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

//passando uma informação global
app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, 'tmp')));

server.listen(PORT, () => {
    console.log(`Server is on in port: ${PORT}`);
});