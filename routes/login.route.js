const express = require('express');
const bcrypt = require('bcrypt');

const ClientModel = require('../model/Client.model');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Welcome to the login page!');
});

router.route('/login').post(async (req, res) => {
  const { username, password } = req.body;

  try {
    const client = await ClientModel.findOne({ username });

    if (!client) {
      return res.status(403).json({ msg: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, client.password); 

    if (!isPasswordValid) {
      return res.status(403).json({ msg: 'Invalid username or password' });
    }

    res.json({ userID: client._id,nomComplet:client.nomComplet,telephone:client.telephone,adresse:client.adresse,email:client.email,image:client.image ,password:client.password,CIN:client.CIN});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
});


module.exports = router;
