const express = require('express');
const router = express.Router();
const util = require('../utilities/index.js');
//const { body, validationResult } = require('express-validator');
const validator = require('../validation/validator.js');

const presidentsController = require('../controllers/presidents.js');

router.get('/',
    validator.validate,
    util.handleErrors(presidentsController.getPresidents));

router.get('/:id',
    validator.validate,
    util.handleErrors(presidentsController.getPresident));

router.post('/',
    validator.validate,
    util.handleErrors(presidentsController.postPresident));

router.put('/:id',
    validator.validate,
    util.handleErrors(presidentsController.putPresident));

router.delete('/:id',
    validator.validate,
    util.handleErrors(presidentsController.deletePresident));

module.exports = router;
