const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true},
  name: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);