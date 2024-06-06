const util = require('../utilities/index.js');
const baseController = {}

baseController.buildHome = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports = baseController;