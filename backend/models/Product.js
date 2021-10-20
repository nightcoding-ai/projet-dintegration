const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    name: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false},
    
});

module.exports = mongoose.model('Product', productSchema);