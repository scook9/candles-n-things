// brings in sequelize and the products model
const sequelize = require("../config/connections");
const { Products } = require("../models/index");
// brings in the database json file to be organized into a table
const productsData = require("./productsData.json");
// function to seed the data
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

// calls to run the seedDatabase function, triggered by "npm run seeds"

seedDatabase();
