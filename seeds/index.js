const sequelize = require("../config/connections");
const candledata = require("./candleData");
const soapdata = require("./soapData");
const { Soap, Candle } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const seedCandle = () => Candle.bulkCreate(candledata);
  const seedSoap = () => Soap.bulkCreate(soapdata);

  await seedCandle();

  await seedSoap();

  process.exit(0);
};

seedAll();
