'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    comment: { type: DataTypes.STRING, allowNull: false }
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.Post, { foreignKey: 'postId' })
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Comment;
};