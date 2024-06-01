const express = require('express');
const router = express.Router();
const util = require('../utilities/index.js');
const validator = require('../validation/validator.js');

const statesController = require('../controllers/states.js');

router.get('/',
    validator.validate,
    util.handleErrors(statesController.getStates));
router.get('/:id',
    validator.validate,
    util.handleErrors(statesController.getState));

router.post('/',
    validator.validate,
    util.handleErrors(statesController.postState));

router.put('/:id',
    validator.validate,
    util.handleErrors(statesController.putState));

router.delete('/:id',
    validator.validate,
    util.handleErrors(statesController.deleteState));

module.exports = router;