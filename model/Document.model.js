const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  categorie: {
    type: categorieSchema,
    required: true,
  },
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
