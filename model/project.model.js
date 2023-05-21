const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  nomProjet: {
    type: String,
    required: true,
  },
  dateProjet: {
    type: Date,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  etat: {
    type: Number,
    required: true,
  },
  nbPiece: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  appartement: {
    type: Number,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
