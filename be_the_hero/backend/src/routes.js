const express = require('express');
const routes = express.Router();

const OngsControllers = require('./controllers/OngsControllers');

routes.get('/', (req, res) => {
  return res.json({server: 'running successfully'});
});

// Routes to ongs
routes.post('/ongs', OngsControllers.create);
routes.get('/ongs', OngsControllers.show);

module.exports = routes;