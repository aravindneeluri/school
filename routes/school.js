const express = require("express");
const school = require("../models/schoolModel");
const schools = express.Router();
const {
  createSchools,
  getSchools,
  getSchoolsById,
} = require("../handlers/sch");

schools
      .route("/")
      .get(getSchools)
      .post(createSchools);


//get school by id

schools.get("/:id", getSchoolsById);

module.exports = schools;
