const router = require("express").Router();

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

//http:localhost:3001/cart
router.get("/", async (req, res) => {
  try {
    console.log("we're in the cart now");
    res.render("homepage", { layout: "cart" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
