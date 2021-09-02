module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });

  return User;
};
