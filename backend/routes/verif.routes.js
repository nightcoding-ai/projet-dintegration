const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

router.get('/', auth, authController.verifUser );


module.exports = router