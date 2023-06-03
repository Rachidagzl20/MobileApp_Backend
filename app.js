const express = require("express");

const app = express();

const bcrypt = require('bcrypt');
const Employee = require('./model/Employee.model'); // Replace with the correct path to your employee model



// ...


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the employee and perform login
    const employee = await Employee.login(username, password);

    if (employee) {
      // Authentication successful
      res.status(200).json({ message: 'Login successful', employee });
    } else {
      // Invalid username or password
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ...

module.exports = app;