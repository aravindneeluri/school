const mongoose = require("mongoose");
//creating the Schema that enforce constraints on our database
const studentSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    trim: true,
    minlength: 3,
    unique : true,
  },
  name: {
    type: String,
    trim: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    trim: true,
  },
  classId: {
    type: String,
    required: true,
  },
});

const student = mongoose.model("Student", studentSchema);

module.exports = student;
