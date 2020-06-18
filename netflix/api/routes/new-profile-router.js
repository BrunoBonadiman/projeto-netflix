const express = require('express');
const router = express.Router();
const newProfileController = require('../controllers/new-profile-controller');

const jwtHelper = require('../config/jwt');

router.post('/create', jwtHelper.verifyJwtToken, newProfileController.create);
router.get('/getProfile', newProfileController.getProfile);

module.exports = router;
