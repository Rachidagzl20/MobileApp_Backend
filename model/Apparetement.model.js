const mongoose = require('mongoose');

const appartementSchema = new mongoose.Schema({
  superficie: {
    type: Number,
    required: true,
  },
  numero_appartemt: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  etage: {
    type: Number,
    required: true,
  },
  etat: {
    type: String,
    required: true,
  },
  nb_chambre: {
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

const Appartement = mongoose.model('Appartement', appartementSchema);

module.exports = Appartement;
