
const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Replace this with your actual secret key
const JWT_SECRET = 'your_jwt_secret_key'; 


router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
      carDetails  // ✅ Get entire carDetails object directly
    } = req.body;

    // Check if user already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new Register({
      name,
      email,
      password: hashedPassword,
      carDetails  // ✅ Save carDetails as is
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'Registered successfully', token });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
});

module.exports = router;
