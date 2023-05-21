const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  _id_client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  _id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
