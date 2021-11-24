const router = require('express').Router();
const productController = require('../controllers/prod.controller');



router.route('/')
      .get(productController.getProducts)
      .post(productController.createProduct)

router.route('/:id')
      .get(productController.getProduct)
      .delete(productController.deleteProduct)
      .put(productController.updateProduct)

module.exports = router;
