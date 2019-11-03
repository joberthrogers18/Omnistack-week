const Sequelize = require('sequelize');
const dbConfig = require('../config/databse');

const User = require('../models/User');
const Adresses = require('../models/Adresses');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

User.init(connection);
Adresses.init(connection);
Tech.init(connection);

Adresses.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;