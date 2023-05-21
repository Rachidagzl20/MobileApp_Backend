const mongoose = require('mongoose');

const villaSchema = new mongoose.Schema({
  superficie: {
    type: Number,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  nb_etage: {
    type: Number,
    required: true,
  },
  nb_chamber: {
    type: Number,
    required: true,
  },
  nb_cuisine: {
    type: Number,
    required: true,
  },
  nb_salon: {
    type: Number,
    required: true,
  },
  nb_SB: {
    type: Number,
    required: true,
  },
});

const Villa = mongoose.model('Villa', villaSchema);

module.exports = Villa;
