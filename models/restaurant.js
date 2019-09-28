var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Restaurant = sequelize.define("restaurant", {
  group_name: {
    type: Sequelize.STRING
  },
  user_name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  restaurant_name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  address: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  phone: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  rating: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  website: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
}, {
    timestamps: false
  });

// Syncs with DB
Restaurant.sync();

module.exports = Restaurant;




