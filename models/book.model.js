'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: String,
  genre_s: String,
  inStock: Boolean,
  price: Number,
  pages_i: Number
});

module.exports = mongoose.model('Book', BookSchema);