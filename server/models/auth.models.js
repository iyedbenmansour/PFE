const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { collection: 'users' }); // Specify the collection name here

const User = mongoose.model('User', userSchema);

module.exports = User;
