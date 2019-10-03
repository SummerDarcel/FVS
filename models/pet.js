module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define(
    "Pet",
    {
      petName: DataTypes.STRING,
      petEnergy: DataTypes.INTEGER,
      petExercise: DataTypes.INTEGER,
      petTraining: DataTypes.INTEGER,
      petGrooming: DataTypes.INTEGER,
      petAffection: DataTypes.INTEGER,
      petDescription: DataTypes.TEXT,
      petPhoto: DataTypes.STRING,
      petLink: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  return Pet;
};
