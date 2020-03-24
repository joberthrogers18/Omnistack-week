const express = require('express');
const routes = express.Router();

const OngsControllers = require('./controllers/OngsControllers');
const IncidentsControllers = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/', (req, res) => {
  return res.json({server: 'running successfully'});
});

// Routes to ongs
routes.post('/ongs', OngsControllers.create);
routes.get('/ongs', OngsControllers.show);

//Routes to incidents
routes.post('/incidents', IncidentsControllers.create);
routes.get('/incidents', IncidentsControllers.show);
routes.delete('/incidents/:id', IncidentsControllers.delete);

// get incidents from a unique ong
routes.get('/profile', ProfileController.index);

// Session
routes.post('/login', SessionController.create);

module.exports = routes;