module.exports = function(sequelize, DataTypes) {
    var Houses = sequelize.define("Houses", {
      // Giving the Houses model a name of type STRING
      name: DataTypes.STRING
    });
  
    Houses.associate = function(models) {
      // Associating Houses with Posts
      // When an Houses is deleted, also delete any associated Posts
      Houses.hasMany(models.Favorites);
    };
  
    
    return Houses;
  };
  