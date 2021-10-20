const router = require('express').Router();
const Product = require('../models/Product');

router.get('/products', function(req, res) {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }));
  });
module.exports = router;
