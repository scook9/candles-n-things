const router = require("express").Router();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const { Products } = require("../models");
console.log(Products);

// route to get home page
//http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    //send to homepage later, all currently
    res.status(200).render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to get shop page
//http://localhost:3001/
router.get("/shop", async (req, res) => {
  try {
    const dbProductData = await Products.findAll();
    if (!dbProductData) {
      return res.status(404).json({ message: "Products not found" });
    }
    const products = dbProductData.map((productList) =>
      productList.get({ plain: true })
    );

    res.render("shop", { products });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//route to get cart page
//http://localhost:3001/
router.get("/cart", async (req, res) => {
  try {
    console.log("we're in the cart now");

    res.status(200).render("cart");
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/
router.get("/cart/:id", async (req, res) => {
  try {
    const item = await Products.findByPk(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
