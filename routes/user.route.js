const express = require('express');
const router = express.Router();
const User = require('./model/user.model');

// Example route
router.get('/example', (req, res) => {
  res.json({ message: 'Example route' });
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

module.exports = router;