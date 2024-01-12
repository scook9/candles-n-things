const sequelize = require("../config/connections");
const { Products } = require("../models/index");

const productsData = require("./productsData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Products.bulkCreate(productsData);

    console.log("data seeded successfuly!");
    process.exit(0);
  } catch (error) {
    console.error("error seeding database", error);
    process.exit(1);
  }
};
seedDatabase();
