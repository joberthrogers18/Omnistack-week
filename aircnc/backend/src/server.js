const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

dotenv.config();

require('./config/dbConfig');

const PORT = process.env.PORT || 3333;

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    // salva o id de usúario com o id do socket de quando ele conecta
    connectedUsers[user_id] = socket.id;
});

app.use((req,res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// esse endpoint carrega agora os arquivos estaticos presentes em upload e assime
// é possível acessar eles pelo front
app.use('/files', express.static(path.resolve( __dirname, '..', 'uploads')));

app.use(routes);

server.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});