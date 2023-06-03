const mongoose = require('mongoose');

// Define the image schema
const imageSchema = new mongoose.Schema({
  length: {
    type: Number,
    required: true,
  },
  chunkSize: {
    type: Number,
    required: true,
  },
  uploadDate: {
    type: Date,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  photos: {
    file: {
      type: String,
      required: true,
    },
  },
});

// Create the Image model
const ImageModel = mongoose.model('Image', imageSchema);

module.exports = ImageModel;
