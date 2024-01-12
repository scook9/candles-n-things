const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Soap extends Model {}

Soap.init(
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
  },
  {
    sequelize,
    modelName: "soap",
    freezeTableName: true,
  }
);

module.exports = Soap;
