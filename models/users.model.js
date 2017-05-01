'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  mobile: String,
  city: String
});

module.exports = mongoose.model('User', UserSchema);