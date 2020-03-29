const express = require('express')
const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3333;
const routes = require('./src/routes');
require('./src/services/database');
const cors = require('cors');
const io = require('socket.io')(server);

app.use(cors());

io.on('connection', socket => {
    console.log('nova conexão', socket.id);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

server.listen(PORT, () => {
    console.log(`The server is on in port ${PORT}`);
});
