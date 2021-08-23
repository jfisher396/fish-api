module.exports = function (sequelize, DataTypes) {
  const Fish = sequelize.define("Fish", {
    width: DataTypes.INTEGER,
    color1: DataTypes.STRING,
    color2: DataTypes.STRING
  });

  return Fish;
};
