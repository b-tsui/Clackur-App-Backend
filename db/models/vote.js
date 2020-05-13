'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    postId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    upVote: DataTypes.BOOLEAN,
    downVote: DataTypes.BOOLEAN
  }, {});
  Vote.associate = function (models) {
    Vote.belongsTo(models.Post, { foreignKey: 'postId' })
    Vote.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Vote;
};