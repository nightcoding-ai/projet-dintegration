const router = require('express').Router();
const authController = require('../controllers/auth.controller');


router.post('/register', authController.signUp); // méthode post pour ajouter un user

module.exports = router;