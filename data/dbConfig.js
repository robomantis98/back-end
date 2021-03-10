const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.env.ENVIRONMENT || 'production';
 //should be || development
module.exports = knex(knexConfig[environment]);