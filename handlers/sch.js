const school = require("../models/schoolModel");


exports.createSchools =  (req, res) => {
    new school({
      schoolName: req.body.schoolName,
      address: req.body.address,
    })
      .save()
      .then((school) => res.send(school))
      .catch((err) => res.send(err));
  };


  exports.getSchools =  (req, res) => {
    schools
      .find({})
      .then((school) => res.send(school))
      .catch((error) => res.send(error));
  };

  exports.getSchoolsById =  (req, res) => {
    schools
      .findById({_id: req.params.id})
      .then((school) => res.send(school))
      .catch((err) => res.send(err));
  };
