var db = require("../models");
var petObject = {};
var compareArray = [];

function compareArrays(arr1, arr2) {
  var arr3 = [];
  var sum = 0;
  for (var i = 0; i < arr1.length; i++) {
    var newNum = Math.abs(arr1[i] - arr2[i]);
    arr3.push(newNum);
  }
  for (var k = 0; k < arr3.length; k++) {
    sum += arr3[k];
  }
  return sum;
}

module.exports = function(app) {
  app.get("/api/allpets", function(req, res) {
    db.Pet.findAll({
      order: ["petName"]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/quiz", function(req, res) {
    var survey = req.body;
    var sArray = [];
    for (var s in survey) {
      for (var i = 0; i < survey[s].length; i++) {
        sArray.push(survey[s][i]);
      }
    }

    db.Pet.findAll({
      attributes: [
        "petName",
        "petEnergy",
        "petExercise",
        "petTraining",
        "petGrooming",
        "petAffection",
        "petPhoto",
        "petDescription"
      ]
    }).then(function(dbExamples) {
      petObject = dbExamples;
      for (var br in petObject) {
        var petArray = [
          petObject[br].dataValues.petEnergy,
          petObject[br].dataValues.petExercise,
          petObject[br].dataValues.petTraining,
          petObject[br].dataValues.petGrooming,
          petObject[br].dataValues.petAffection
        ];
        compareArray.push(petArray);
      }
      var sumArray = [];

      for (var j = 0; j < compareArray.length; j++) {
        sumArray.push(compareArrays(compareArray[j], sArray));
      }
      var num = Math.min.apply(null, sumArray);
      for (var t = 0; t < sumArray.length; t++) {
        if (sumArray[t] === num) {
          break;
        }
      }
      var resultPet = {
        petName: petObject[t].dataValues.petName,
        petPhoto: petObject[t].dataValues.petPhoto,
        petDescription: petObject[t].dataValues.petDescription
      };
      res.json(JSON.stringify(resultPet));
    });
  });
  // Create a new pet
  app.post("/api/newpet", function(req, res) {
    db.Pet.create({
      petName: req.body.name,
      petEnergy: req.body.energy,
      petExercise: req.body.exercise,
      petTraining: req.body.training,
      petGrooming: req.body.grooming,
      petAffection: req.body.affection,
      petDescription: req.body.description,
      petPhoto: req.body.photo,
      petLink: req.body.link
    })
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  app.get("/api/:pet", function(req, res) {
    var b = req.params.pet;
    db.Pet.findOne({
      where: {
        petName: b
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
