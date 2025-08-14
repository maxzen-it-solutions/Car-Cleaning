const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';


router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
        phone,            // ✅ Added
  profilePic,   
      carDetails,
      role = 'user' // ✅ Default to 'user' if not provided
    } = req.body;

    // Check if user already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data
    const userData = {
      name,
      email,
        phone,            // ✅ Added
  profilePic,  
      password: hashedPassword,
      role
    };

    // ✅ Only include carDetails if role is 'user'
    if (role === 'user') {
      userData.carDetails = carDetails;
    }

    // Save user
    const newUser = new Register(userData);
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, email: newUser.email, role: newUser.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ message: 'Registered successfully', token });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
});

// 🔹 GET: Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await Register.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// 🔹 PUT: Update user
router.put('/:id', async (req, res) => {
  try {
    const { name, email, role, carName, carNumber } = req.body;

    const updateData = {
      name,
      email,
      role,
      carDetails: {
        carName,
        carNumber,
      },
    };

    const updated = await Register.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// 🔹 DELETE: Remove user
router.delete('/:id', async (req, res) => {
  try {
    await Register.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;