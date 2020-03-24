const express = require('express');
const routes = express.Router();

const OngsControllers = require('./controllers/OngsControllers');

routes.get('/', (req, res) => {
  return res.json({server: 'running successfully'});
});

routes.post('/ongs', OngsControllers.create);

module.exports = routes;