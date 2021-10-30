const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id : {
    type: String,
    unique: true,
    trim: true,
  },
  firstname : {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
  },
  name : {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
  },
  mail: {
    type: String,
    required: true,
    lowercase: true,

  },
  password: {
    type: String,
    required: true,
    maxLength: 1024,
    minLength: 5,
  },
  points: {
    type: Number,
    required: false,
  },
  command : {
    type: Object,
    required: false,
  },
  
    
});

module.exports = mongoose.model('User', userSchema);