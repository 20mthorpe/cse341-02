const routes = require('express').Router();
const util = require('../utilities/index.js');
const { requiresAuth } = require('express-openid-connect');



const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
//const util = require('../utilities/index.js');

routes.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// routes.get('/profile', 
// requiresAuth(),
//  (req, res) => {
//     res.send(JSON.stringify(req.oidc.user));
// });

const baseController = require('../controllers/base.js');

routes.use("/api-docs", requiresAuth(), swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes.get('/', baseController.buildHome);

routes.use('/states', util.handleErrors(require('./states.js')));
routes.use('/presidents', util.handleErrors(require('./presidents.js')));


module.exports = routes;