const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
  name: String,
  description: String ,
  price : Number,
  seller : String,
  available : Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Note', noteSchema);