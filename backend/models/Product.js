const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id_product: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: Image, required: true },
});

module.exports = mongoose.model('Product', productSchema);