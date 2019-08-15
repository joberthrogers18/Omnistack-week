const express = require('express');
const route = express.Router();
const DevController = require('./controllers/DevController');

route.get('/', (request, response) => {
    response.send('ok');
});

route.post('/', DevController.store );

module.exports = route;