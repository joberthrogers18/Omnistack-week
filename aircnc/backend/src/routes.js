const express = require('express');
const routes = express.Router();

routes.post('/users', (req, res) => {
    const body = req.body;

    res.json(body);
});


module.exports = routes;