const express = require('express');
const routes = express.Router();
const multer = require('multer');

const uploadConfig = require('./config/uploadConfig');

const SessionController = require('./controllers/SessionControllers');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spot/:spot_id/bookings', BookingController.store);


module.exports = routes;