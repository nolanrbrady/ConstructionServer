const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
let sequelize;
// Test
if (process.env.DATABASE_URL) {
  // Runs when code is run on Heroku server
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // runs on local machine
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
  });
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.construction = require('./construction.model.js')(sequelize, Sequelize);

module.exports = db;
