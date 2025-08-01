// const mongoose = require('mongoose');

// const registerSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   confirmPassword: String,
//   carDetails: {
//     carName: String,
//     carModel: String,
//     carColor: String,
//     carNumber: String,
//     address: String,
//     parking: String
//   }
// });

// module.exports = mongoose.model('register', registerSchema);





const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
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
