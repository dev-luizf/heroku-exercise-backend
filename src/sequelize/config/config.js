require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DATABASE, HOST, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    dialect: 'postgres',
    port: DB_PORT,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    dialect: 'postgres',
    port: DB_PORT,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    dialect: 'postgres',
    port: DB_PORT,
  },
};