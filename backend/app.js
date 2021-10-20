const express = require('express');
const mongoose = require("mongoose");



mongoose
.connect('mongodb+srv://osaNight:adminOSA@osacluster.ynpg7.mongodb.net/osacluster')

.then(() => console.log('Connected to MongoDB'))

.catch((err) => console.log("Failed to connect to MongoDB", err));


const app = express();
app.use(express.urlencoded({extended: true})); //express 4.16 + , plus besoin d'appeller le module bodyparser
app.use(express.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



module.exports = app;