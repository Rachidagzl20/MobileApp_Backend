const mongoose = require('mongoose');

// Define the publication schema
const publicationSchema = new mongoose.Schema({
  description: String,
  date_publication: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  projet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projet',
  },
  __v: {
    type: Number,
    default: 0,
  },
});

// Create the Publication model
const PublicationModel = mongoose.model('Publication', publicationSchema);

module.exports = PublicationModel;
