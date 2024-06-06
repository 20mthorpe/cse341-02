const routes = require('express').Router();
const util = require('../utilities/index.js');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
//const util = require('../utilities/index.js');

const baseController = require('../controllers/base.js');

routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', baseController.buildHome);

routes.use('/states', util.handleErrors(require('./states.js')));
routes.use('/presidents', util.handleErrors(require('./presidents.js')));


module.exports = routes;