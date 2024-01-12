const sequelize = require("../config/connections");
const { Candle, Soap } = require("../models");

const soapData = require("./soapData.json");
const candleData = require("./candleData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Soap.bulkCreate(soapData);
    console.log("soaps seeded successfully");

    await Candle.bulkCreate(candleData);
    console.log("candles seeded successfully");

    console.log("data seeded successfuly!");
    process.exit(0);

  } catch (error) {
    console.error("error seeding database", error);
    process.exit(1);
  }
};
seedDatabase();
