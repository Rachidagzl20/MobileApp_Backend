const mongoose = require('mongoose');

const terrainSchema = new mongoose.Schema({
  superficier: {
    type: Number,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  nb_face: {
    type: Number,
    required: true,
  },
  etats: {
    type: String,
    required: true,
  },
});

const Terrain = mongoose.model('Terrain', terrainSchema);

module.exports = Terrain;
