const express = require('express');
const route = express.Router();

route.get('/', (request, response) => {
    response.send('ok');
});

route.post('/', (req, res) => {
    res.json({voltou: req.body});
});

module.exports = route;