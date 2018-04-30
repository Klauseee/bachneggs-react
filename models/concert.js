const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  // user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  title: { type: String, minlength: 2, required: true},
  image: { type: String, pattern: /^https?:\/\/.+/ },
  date: { type: String},
  performer1: { type: String, minglength: 2, required: true},
  performer2: { type: String, minglength: 2, required: true},
  performer3: { type: String, minglength: 2},
  description: {type: String, maxlength: 560},
  // comments: [ commentSchema ],
  category: { type: mongoose.Schema.ObjectId, ref: 'Category', required: true }
  // category: { type: mongoose.Schema.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Concert', schema);
