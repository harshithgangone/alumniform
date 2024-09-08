// models/alumni.js
const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  
  phonenumber:{
    type: Number,
    required: true
  },
  alternate_phonenumber:{
    type: Number,
    required: true
  },
  branch:{
    type: String,
    required: true
  },
  batch:{
    type: String,
    required: true
  },
  graduationYear: {
    type: Number,
    required: true
  },
  Date_time_ofEntry: {
    type: String,
    required: true
  },
  interest: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Alumni', alumniSchema);
