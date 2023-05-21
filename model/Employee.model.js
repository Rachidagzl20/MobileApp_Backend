const mongoose = require('mongoose');
const userSchema = require('./userSchema'); // Path to the file where userSchema is defined

const employeeSchema = new mongoose.Schema({
  nomComplet: {
    type: String,
    required: true,
  },
  CIN: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  departement: {
    type: String,
    required: true,
  },
  user: {
    type: userSchema,
    required: true,
  },
  date_naissance: {
    type: Date,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
