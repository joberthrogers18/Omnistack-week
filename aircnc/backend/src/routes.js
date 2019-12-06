const express = require('express');
const routes = express.Router();
const multer = require('multer');

const uploadConfig = require('./config/uploadConfig');

const SessionController = require('./controllers/SessionControllers');
const SpotController = require('./controllers/SpotController');

const upload = multer(uploadConfig);

routes.post('/users', SessionController.store);
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);


module.exports = routes;