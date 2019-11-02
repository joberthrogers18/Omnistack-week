const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AddressesController = require('./controllers/AddressesController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressesController.index);
routes.post('/users/:user_id/addresses', AddressesController.store);

 module.exports = routes;