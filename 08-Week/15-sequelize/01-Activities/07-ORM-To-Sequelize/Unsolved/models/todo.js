// Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;
  };
  