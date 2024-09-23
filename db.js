const { Sequelize } = require('sequelize');
require('dotenv').config();  // Load environment variables

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.log('Error connecting to PostgreSQL:', err));

module.exports = sequelize;
