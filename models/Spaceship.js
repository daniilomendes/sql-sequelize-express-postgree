const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Spaceship = sequelize.define("spaceships", {
  name: DataTypes.STRING,
  capacity: DataTypes.INTEGER,
});

module.exports = Spaceship;