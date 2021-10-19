const express = require('express');
const Thing = require('./models/thing');
const User = require('./models/user');
const Product = require('./models/Product');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

mongoose
.connect('mongodb+srv://osaNight:adminOSA@osacluster.ynpg7.mongodb.net/osacluster')

.then(() => console.log('Connected to MongoDB'))

.catch((err) => console.log("Failed to connect to MongoDB", err));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//POST user
app.use(bodyParser.json());
app.post('/user', (req, res, next) => {
  delete req.body._id;
  const user = new User({
    "firstname": req.body.firstname,
    "name": req.body.name,
    "mail": req.body.mail,
    "password": req.body.password
  });
  app.get('/users',(req, res, next) => {
    User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
  });



  user.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

//POST product
app.post('/product', (req, res, next) => {
  const product = new Product({
    "name": req.body.name,
    "description": req.body.description,
    "stock": req.body.stock,
    "price": req.body.price,
    "image": req.body.image
  })

  user.save()
    .then(() => res.status(201).json({ message: 'Product save !'}))
    .catch(error => res.status(400).json({ error }));
});

module.exports = app;