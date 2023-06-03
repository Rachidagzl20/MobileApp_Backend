const express = require('express');
const router = express.Router();
const PublicationModel = require('../model/Publication.model');

// Get all publications
router.get('/', async (req, res) => {
  try {
    // Fetch all publication data from the MongoDB database
    const publications = await PublicationModel.find();

    // Return the publication data as a response
    res.json(publications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a publication by ID
router.get('/:id', async (req, res) => {
  try {
    const publicationId = req.params.id;

    // Fetch the publication data from the MongoDB database based on the publicationId
    const publicationData = await PublicationModel.findById(publicationId);

    if (!publicationData) {
      return res.status(404).json({ message: 'Publication not found' });
    }

    // Return the publication data as a response
    res.json(publicationData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
