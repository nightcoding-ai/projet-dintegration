const express = require('express');
const Thing = require('./models/thing');
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

  app.use(bodyParser.json());
  
  app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });


module.exports = app;