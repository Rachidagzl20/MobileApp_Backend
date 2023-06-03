const express = require('express');
const router = express.Router();
const ClientModel = require('../model/Client.model');
const bcrypt = require('bcrypt');
// Profile endpoint
router.get('/:id', async (req, res) => {
  try {
    const clientId = req.params.id;

    // Fetch the user data from the MongoDB database based on the userId
    const clientData = await ClientModel.findById(clientId);

    if (!clientData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user data as a response
    res.json(clientData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a client by ID
router.put('/updClient/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Check if the password field exists in the updateData
    if (updateData.password) {
      // Hash the new password before updating
      const hashedPassword = await bcrypt.hash(updateData.password, 10);
      updateData.password = hashedPassword;
    }

    const updatedClient = await ClientModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }

    return res.json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});







/* router.put('/api/updClient/:id', async (req, res) => {
  const clientId = req.params.id;

  try {
    // Fetch the client data from the MongoDB database based on the clientId
    const findclient = await ClientModel.findById(clientId);

    if (!findclient) {
      return res.status(404).json({ message: 'Client not found' });
    }

    // Update the client data from the request body
    findclient.nomComplet = req.body.nomComplet;
    findclient.adresse = req.body.adresse;
    findclient.email = req.body.email;
    findclient.telephone = req.body.telephone;
    findclient.CIN = req.body.CIN;

    // Save the updated client data to the MongoDB database
    const updatedClient = await findclient.save();

    res.status(200).json({ message: 'Client data updated successfully', updatedClient });
  } catch (error) {
    console.error('Error updating client data:', error);
    res.status(500).json({ message: 'Error updating client data' });
  }
});
 */


module.exports = router;
