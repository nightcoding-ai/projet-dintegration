const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

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
    unique: true

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
    default: 0
  },
  role: {
    type: String,
    default: 'user',
    enum: ["user", "admin", "seller"]
   },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);