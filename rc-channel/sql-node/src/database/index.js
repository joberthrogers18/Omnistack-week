const Sequelize = require('sequelize');
const dbConfig = require('../config/databse');

const User = require('../models/User');
const Adresses = require('../models/Adresses');

const connection = new Sequelize(dbConfig);

User.init(connection);
Adresses.init(connection);

Adresses.associate(connection.models);
User.associate(connection.models);

module.exports = connection;