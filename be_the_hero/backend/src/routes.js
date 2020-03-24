const express = require('express');
const routes = express.Router();

const OngsControllers = require('./controllers/OngsControllers');
const IncidentsControllers = require('./controllers/IncidentController');

routes.get('/', (req, res) => {
  return res.json({server: 'running successfully'});
});

// Routes to ongs
routes.post('/ongs', OngsControllers.create);
routes.get('/ongs', OngsControllers.show);

//Routes to incidents
routes.post('/incidents', IncidentsControllers.create);
routes.get('/incidents', IncidentsControllers.show);

module.exports = routes;