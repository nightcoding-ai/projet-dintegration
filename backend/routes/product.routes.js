const router = require('express').Router();
const productController = require('../controllers/prod.controller');
const authController = require('../controllers/auth.controller');
const authShop = require('../middleware/authShop');
const auth = require('../middleware/auth');



router.get('/', productController.getProducts)
router.post('/', auth,authShop, productController.createProduct)

router.route('/:id')
      .get(productController.getProduct)
      .delete(auth,authShop, productController.deleteProduct)
      .put(auth,authShop, productController.updateProduct)

module.exports = router;
