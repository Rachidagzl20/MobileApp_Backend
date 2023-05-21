const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  img: {
    title: String,
    path: {
      type: mongoose.Schema.Types.Buffer,
      required: true,
    },
  },
  dateTime: {
    type: Date,
    required: true,
  },
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
