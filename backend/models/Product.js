const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique : true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    stock: { 
        type: Number, 
        required: true 
    },
    price: {
        type: Number, 
        required: true 
    },
    image: {
        type: String, 
        required: true 
    },
    
});

module.exports = mongoose.model('Product', productSchema);