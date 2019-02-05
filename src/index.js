const express = require("express");
const db = require("../config/db");
const routes = require("./routes");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
})