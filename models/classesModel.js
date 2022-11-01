const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
//S3 creating the Schema

const ClasssSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    trim: true,
    minlength: 3,
    unique : true
  },

  classsname: {
    type: String,
    trim: true,
    minlength: 3,
    unique : true
  },

  classStrength: {
    type: Number,
    trim: true,
    minlength: 1,
  },  

});
const Classs = mongoose.model("Classs", ClasssSchema);
module.exports = Classs;
