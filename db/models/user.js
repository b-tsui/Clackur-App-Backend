"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Post, { foreignKey: 'userId' })
    User.hasMany(models.Vote, { foreignKey: 'userId' })
    User.hasMany(models.Comment, { foreignKey: 'userId' })
  };


  return User;
};
