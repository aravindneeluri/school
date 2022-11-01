const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

//S3 creating the Schema

const schoolSchema = new mongoose.Schema({
    schoolName: {
    type : String,
    trim : true,
    minlength : 3,
    required : true,
    unique : true
    
  },
  address: {
    type: String,
    trim: true,
    minlength: 3,
    required : true,
  },

});

schoolSchema.plugin(uniqueValidator);

const school = mongoose.model("school", schoolSchema);
module.exports = school;
