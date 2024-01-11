const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Candle extends Model {}

Candle.inin({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Candle;
