const mongoose = require('mongoose');

const dateNaissanceSchema = new mongoose.Schema({
  jour: {
    type: Number,
    required: true,
  },
  mois: {
    type: String,
    required: true,
  },
  annee: {
    type: Number,
    required: true,
  },
});

const clientSchema = new mongoose.Schema({
  nomComplet: {
    type: String,
    required: true,
  },
  CIN: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: String,
  date_naissance: {
    type: dateNaissanceSchema,
    required: true,
  },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
