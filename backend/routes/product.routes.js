const router = require('express').Router();
const productController = require('../controllers/prod.controller');
const authController = require('../controllers/auth.controller');
const authShop = require('../middleware/authShop');
const auth = require('../middleware/auth');



router.route('/')
      .get(productController.getProducts)
      .post(productController.createProduct)

router.post('/', auth,authShop, productController.createProduct)

router.route('/:id')
      .get(productController.getProduct)
      .delete(productController.deleteProduct)
      .put(auth,authShop, productController.updateProduct)

module.exports = router;
