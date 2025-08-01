// const express = require('express');
// const router = express.Router();
// const Register = require('../models/register'); // same model used for registration


// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   const user = await Register.findOne({ email });
//   if (!user) return res.status(401).json({ error: 'Invalid email or password' });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

//   // Create token
//   const token = jwt.sign(
//     { userId: user._id, email: user.email },
//     'your_jwt_secret_key', // Use a strong key and move it to .env
//     { expiresIn: '2h' }
//   );

//   res.status(200).json({ token });
// });

// module.exports = router;








const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await Register.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

  // ✅ Create token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    'your_jwt_secret_key',
    { expiresIn: '2h' }
  );

  // ✅ Return email too
  res.status(200).json({ token, email: user.email });
});

module.exports = router;
