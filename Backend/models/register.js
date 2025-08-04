


const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  carDetails: {
    carName: String,
    carModel: String,
    carColor: String,
    carNumber: String,
    address: String,
    parking: String
  }
});
module.exports = mongoose.model('register', registerSchema);