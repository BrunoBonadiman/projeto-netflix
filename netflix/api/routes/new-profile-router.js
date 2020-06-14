const express = require('express');
const router = express.Router();
const newProfileController = require('../controllers/new-profile-controller');

router.post('/perfis', newProfileController.create);
router.get('/perfis', newProfileController.findAll);
router.get('/perfis/:id', newProfileController.findById);
router.put('/perfis/:id', newProfileController.update);
router.delete('/perfis/:id', newProfileController.delete);

module.exports = router;
