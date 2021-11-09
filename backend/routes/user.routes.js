const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth')

router.post('/register', authController.register)

router.post('/login', authController.login)

router.get('/logout', authController.logout)

router.get('/refresh_token', authController.refreshToken)

router.get('/infor', auth, authController.getUser)

/*
router.patch('/addToCart', auth, authController.addToCart)

router.patch('/addPoints', auth, authController.addPoints)

router.get('/history, auth, authController.history)
*/

module.exports = router