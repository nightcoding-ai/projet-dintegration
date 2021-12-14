var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var Cart = require('../models/Cart');


router.get('/', function (req, res) {
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.json({products: productChunks});
    });
});
router.get('/test', function(req, res, next) {
    if(req.session.isFirst || req.cookies.isFirst) {
        res.send("welcome to visit again");
    }else {
        req.session.isFirst = 1;
        res.cookie('isFirst', 1, { maxAge: 60 * 1000, singed: true});
        res.send ("welcome to visit for the first time.");
    };
});
router.get('/add-to-cart/:id', function (req, res) {
    var productId = req.params.id;
    console.log(req.session.cart)
    var cart = new Cart(req.session.cart ? req.session.cart.items : {});
    Product.findById(productId, function (err, product) {
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart)
        res.redirect('/');
    });
});

router.get('/shopping-cart', function (req, res) {
    if (!req.session.cart) {
        return res.json({products: null});
    }
    var cart = new Cart(req.session.cart.items);
    res.json({products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;