const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Soap extends Model {}

Soap.inin({
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
});

module.exports = Soap;
