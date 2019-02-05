const express = require("express");
const db = require("../config/db");

const app = express();

app.get("/", (req, res) => {
    res.send("Funcionando");
});

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
})