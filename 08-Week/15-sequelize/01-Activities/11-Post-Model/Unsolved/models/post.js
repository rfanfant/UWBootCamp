module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
    
  })
  // This model needs a title, a body, and a category

  // Don't forget to 'return' the post after defining
  return Post
};
