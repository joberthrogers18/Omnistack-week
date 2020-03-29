const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();

const OngsControllers = require('./controllers/OngsControllers');
const IncidentsControllers = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/', (req, res) => {
  return res.json({ server: 'running successfully' });
});

// Routes to ongs
// validation using celebrate
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngsControllers.create);
routes.get('/ongs', OngsControllers.show);

//Routes to incidents
routes.post('/incidents', IncidentsControllers.create);
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentsControllers.show);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentsControllers.delete);

// get incidents from a unique ong
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProfileController.index);

// Session
routes.post('/login', SessionController.create);

module.exports = routes;