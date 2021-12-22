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
    },
    value : {
        type: Number,
        required: false,
        default: 0
        
    }
    
    
})
module.exports = mongoose.model('Offer', offersSchema);