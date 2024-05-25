const express = require('express');
const router = express.Router();

const statesController = require('../controllers/states.js');

router.get('/', statesController.getStates);
router.get('/:id', statesController.getState);

router.post('/', statesController.postState);

router.put('/:id', statesController.putState);

router.delete('/:id', statesController.deleteState);

module.exports = router;