const router = require("express").Router();
const { Candle, Soap } = require("../models");

// route to get home page
//http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    //send to homepage later, all currently
    res.status(200).render("all");
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/homepage
router.get("/homepage", async (req, res) => {
  try {
    //send to homepage later, all currently
    res.status(200).render("homePage");
  } catch (err) {
    res.status(500).json(err);
  }
});

//need route to cart

module.exports = router;
