const router = require('express').Router();
const authController = require('../controllers/auth.controller');


router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logOut); // méthode post pour ajouter un user

module.exports = router;