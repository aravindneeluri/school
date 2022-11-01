const express = require("express");
const classs = require("../models/classesModel");
const clas = express.Router();

clas.post("/:schoolName/classs", (req, res) => {
  new classs({ 
    schoolName: req.params.schoolName,
    classsname: req.body.classsname,
    classStrength: req.body.classStrength,
  })
    .save()
    .then((classs) => res.send(classs))
    .catch((err) => res.send(err));
});

//get all classes

clas.get("/", (req, res) => {
  classs
    .find({})
    .then((classs) => res.send(classs))
    .catch((err) => res.send(err));
});

//get single class

clas.get("/:id", (req, res) => {
  classs
    .findById({ _id: req.params.id })
    .then((classs) => res.send(classs))
    .catch((err) => res.send(err));
});

module.exports = clas;
