"use strict";
const bcrypt = require("bcryptjs");

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
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  return User;
};
