const router = require('express').Router();
const authAdmin = require('../middleware/authAdmin')
const auth = require('../middleware/auth');
const offersController = require('../controllers/offers.controller');

router.get('/', offersController.getOffers)
router.post('/', auth,authAdmin, offersController.createOffer)

router.route('/:id')
      .get(offersController.getOffer)
      .delete(auth,authAdmin, offersController.deleteOffer)
      .put(auth,authAdmin, offersController.updateOffer)

module.exports = router;