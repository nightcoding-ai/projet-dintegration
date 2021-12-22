var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var Cart = require('../models/Cart');

var Order = require('../models/Order');
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
    res.redirect('/');
});

router.get('/shopping-cart', function (req, res) {
    if (!req.session.cart) {
        return res.json({products: null});
    }
    var cart = new Cart(req.session.cart);

    res.json({products: cart.generateArray(), totalPrice: cart.totalPrice, totalPoints: cart.totalPoints});
});



router.get('/purge', function (req, res){
    req.session.cart = {}
    res.redirect("/")
});

/** Routes pour le paiement */


router.post('/checkout', function(req, res, next) {

    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
        "sk_test_51K7oKVAmHmiFCRWpZZqifR760cN7SAfI4aoP156dZfRJK9JPSIPsXVNV4yFnfA1IsorBsqkm3WhMz1PuJ06YFVC100HtJImrYx"
    );
    stripe.charges.create({
        amount: cart.totalPrice*100,
        currency: "eur",
        source: req.body.token, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err) {
        var cart = new Cart(req.session.cart);
        var order = new Order({
            cart: cart,
            name: req.body.name,
            paymentId: req.body.token,
            email: req.body.email,
        });
        for(let i in req.session.cart.items) {
            let article = req.session.cart.items[i];
            let stock = article.item.stock;
            let qty = article.qty;
            console.log("voici l'item " + i, article.item._id)
            console.log('test' + article)
            Product.findByIdAndUpdate(
                article.item._id, {
                    stock : stock - qty
                }
                ,
                function (err, docs) {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log("Updated User : ", docs);
                    }
                });
        }
        req.session.cart = {}
        order.save();
    });
});





module.exports = router;