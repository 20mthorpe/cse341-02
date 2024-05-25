const express = require('express');
const router = express.Router();

const presidentsController = require('../controllers/presidents.js');

router.get('/', presidentsController.getPresidents);
router.get('/:id', presidentsController.getPresident);

router.post('/', presidentsController.postPresident);

router.put('/:id', presidentsController.putPresident);

router.delete('/:id', presidentsController.deletePresident);

module.exports = router;
