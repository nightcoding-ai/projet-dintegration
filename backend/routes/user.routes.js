const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

const authAdmin = require('../middleware/authAdmin');



router.post('/register', authController.register)

router.get('/refresh_token', authController.refreshToken)


router.post('/login', authController.login)

router.get('/logout', authController.logout)

router.get('/infos', authController.infos)
router.get('/removeCurrentUser', authController.removeCurrentUser)
router.get('/infor', auth, authController.getUser)
router.get('/get_all_users',auth,authAdmin,  authController.getAllUser)

router.delete('/forget',auth,  authController.delUser)


router.patch('/add_points', auth, authController.addPoints)
router.get('/add_offer/:id',auth , authController.addOfferToUser)

/*
router.get('/history', auth, authController.history)
*/

module.exports = router