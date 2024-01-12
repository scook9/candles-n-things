const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Candle extends Model {}

Candle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    scent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "candle",
    freezeTableName: true,
  }
);

module.exports = Candle;
