const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  date_reservation: {
    type: Date,
    required: true,
  },
  client: {
    type: Number,
    required: true,
  },
  Projet: {
    type: Number,
    required: true,
  },
});
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
