'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    imageUrl: { type: DataTypes.STRING, allowNull: false },
    public: DataTypes.BOOLEAN
  }, {});
  Post.associate = function (models) {
    Post.belongsTo(models.User, { foreignKey: 'userId' })
    Post.hasMany(models.Vote, { foreignKey: 'postId' })
    Post.hasMany(models.Comment, { foreignKey: 'postId' })
  };
  return Post;
};