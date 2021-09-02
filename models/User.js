const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });

  User.beforeCreate(function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};