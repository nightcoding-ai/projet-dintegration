var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var Cart = require('../models/Cart');
var Order = require('../models/order');
flash = require('express-flash')

router.get('/', function (req, res) {
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.json({title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        if (req.session.cart.items[productId].qty > product.stock){
            cart.reduceByOne(productId);
            res.json({msg:"ERROR"})
        }
        else{
            res.json({msg:"OK"})
        }
    });
});

router.get('/reduce/:id', function(req, res) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    if (req.session.cart.items[productId].qty == 0){
        cart.removeItem(productId);
        res.json({msg:"DELETED"});
    }
    else{
        res.json({msg:"OK"})
    }
    
});

router.get('/remove/:id', function(req, res) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function (req, res) {
    if (!req.session.cart) {
        return res.json({products: null});
    }
    var cart = new Cart(req.session.cart);
    res.json({products: cart.generateArray(), totalPrice: cart.totalPrice});
});



router.get('/purge', function (req, res){
    req.session.destroy()
    res.redirect("/")
});

/** Routes pour le paiement */

router.get('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.get('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
        "sk_test_51K7oKVAmHmiFCRWpZZqifR760cN7SAfI4aoP156dZfRJK9JPSIPsXVNV4yFnfA1IsorBsqkm3WhMz1PuJ06YFVC100HtJImrYx"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/shopping-cart');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    });
});

module.exports = router;