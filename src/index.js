const express = require("express");
const db = require("../config/db");
const routes = require("./routes");

const bodyParser = require("body-parser");

const app = express();

const server = require("http").Server(app); // extract the server which we create with express
const io = require("socket.io")(server); // able that our serve listen the protocol ws(web socket) beyond the protocol http 

app.use((req, res, next) => {
    req.io = io; //this variable i can acess in all req in my aplicatio (global)

    return next(); // continue the next requisitions
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
})