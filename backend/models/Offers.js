const mongoose = require('mongoose');

const offersSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,  
    },
    price : {
        type: Number,
        required:  true,
    }
    
})
module.exports = mongoose.model('Offer', offersSchema);