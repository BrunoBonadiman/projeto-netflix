const express = require('express');
const router = express.Router();
const newProfileController = require('../controllers/new-profile-controller');

router.post('/create', newProfileController.create);
router.get('/getProfile', newProfileController.getProfile);

module.exports = router;
