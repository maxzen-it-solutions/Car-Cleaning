const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  profilePic: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'employee'],
    default: 'user',
  },
   area: {  // <-- add this
    type: String,
    enum: ["KPHB", "Kukatpally", "Miyapur", "Chandanagar"],
    default: "",
  },
  carDetails: {
    carName: String,
    carModel: String,
    carColor: String,
    carNumber: String,
    address: {
      type: String,
      enum: ["KPHB", "Kukatpally", "Miyapur", "Chandanagar"], // ✅ dropdown values
    },
    parking: String,
  }
});

module.exports = mongoose.model('Register', registerSchema);
