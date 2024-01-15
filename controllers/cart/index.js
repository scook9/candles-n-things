const router = require("express").Router();

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
// const { Cart } = require("../../models");

//http:localhost:3001/cart
router.get("/", async (req, res) => {
  try {
    // const dbCartData = await Cart.findAll();
    // if (!dbCartData) v{
    //     return res.status(404).json({ message: "Cart not found"});
    console.log("we're in the cart now");
    res.render("homepage", { layout: "cart" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
