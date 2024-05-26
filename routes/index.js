const routes = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use('/states', require('./states.js'));
routes.use('/presidents', require('./presidents.js'));


module.exports = routes;