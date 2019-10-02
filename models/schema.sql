DROP DATABASE IF EXISTS animals;
CREATE DATABASE animals;

USE animals;
CREATE TABLE pets (
    id INT (30) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    petName VARCHAR (50) NOT NULL,
    petEnergy INTEGER (10) NOT NULL,
    petExercise INTEGER (10) NOT NULL,
    petTraining INTEGER (10) NOT NULL,
    petGrooming INTEGER (10) NOT NULL,
    petAffection INTEGER (10) NOT NULL,
    petDescription VARCHAR (255)NOT NULL,
    petPhoto VARCHAR (255) NOT NULL,
    petLink VARCHAR (255) NOT NULL
);
