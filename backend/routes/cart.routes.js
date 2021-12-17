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

router.get('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.get('/purge', function (req, res){
    req.session.destroy()
    res.redirect("/")
})
module.exports = router;