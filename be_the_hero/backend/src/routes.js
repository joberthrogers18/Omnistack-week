const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({server: 'running successfully'});
});

module.exports = routes;