const express = require("express");
const student = require("../models/studentsModel");

const students = express.Router();

// register a student into a class

students.post("/:schoolName/classs/student", (req, res) => {
  new student({
    schoolName: req.params.schoolName,
    name: req.body.name,
    lastName: req.body.lastName,
    classId: req.body.classId,
  })
    .save()
    .then((student) => res.send(student))
    .catch((error) => res.send(error));
});

//get all students

students.get("/", (req, res) => {
  student
    .find({})
    .then((student) => res.send(student))
    .catch((err) => res.send(err));
});
 
// get student by id
students.get('/:id', (req, res) => {
student
  .findById({ _id: req.params.id })
  .then((student) => res.send(student))
  .catch((err) => res.send(err))
})

//update student

students.patch('./:', (req, res) => {


})


module.exports = students;
