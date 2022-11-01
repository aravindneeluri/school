const mongoose = require("mongoose");
//creating the Schema that enforce constraints on our database
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
  },

  lastName: {
    type: String,
    trim: true,
  },
  _classId: {
    type: mongoose.Types.ObjectId,

    required: true,
  },
});

const teacher = mongoose.model("teacher", teacherSchema);

module.exports = teacher;
