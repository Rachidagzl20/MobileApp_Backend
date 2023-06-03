const mongoose = require('mongoose');

// Define the projet schema
const projetSchema = new mongoose.Schema({
  nomProjet: String,
  date_lancer: {
    type: Date,
    default: Date.now,
  },
  adresse: String,
  etat: Number,
  nb_piece: Number,
  type: String,
  __v: {
    type: Number,
    default: 0,
  },
});

// Create the Projet model
const ProjetModel = mongoose.model('Projet', projetSchema);

module.exports = ProjetModel;
