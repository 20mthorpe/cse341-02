const routes = require('express').Router();

routes.use('/states', require('./states.js'));
routes.use('/presidents', require('./presidents.js'));

module.exports = routes;