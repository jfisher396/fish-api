module.exports = function (sequelize, DataTypes) {
  const Fish = sequelize.define("Fish", {
    name: DataTypes.STRING,
    width: DataTypes.INTEGER,
    color: DataTypes.STRING
  });

  return Fish;
};
