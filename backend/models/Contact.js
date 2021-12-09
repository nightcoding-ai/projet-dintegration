const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    
    mail: {
        type: String,
        required: true,
        trim: true,
    },
    subject: { 
        type: String, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    status: {
        type: Boolean, //if true => open, else => closed
        required: true 
    },
    response: {
        type: String, 
        required: false 
    }
    
});

module.exports = mongoose.model('Contact', contactSchema);