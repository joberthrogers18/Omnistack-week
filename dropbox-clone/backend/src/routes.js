const express = require('express');
const route = express.Router();
const BoxController = require('./controllers/BoxController');

route.get("/boxes", (req, res) => {
    BoxController.show(req, res)
});

route.post("/boxes", (req, res) => {
    BoxController.store(req, res);
})

module.exports = route;