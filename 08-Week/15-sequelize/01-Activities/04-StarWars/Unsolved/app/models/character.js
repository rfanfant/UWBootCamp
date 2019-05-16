// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Character = sequelize.define("character", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.INTEGER,
  forcePoints: Sequelize.INTEGER
});

// Syncs with DB
Character.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Character;