const router = require("express").Router();
const { Candle, Soap } = require("../models");

// route to get one candle
router.get("/candle/:id", async (req, res) => {
  try {
    const candleData = await Candle.findByPk(req.params.id);
    if (!candleData) {
      res.status(404).json({ message: "No candle with this id" });
      return;
    }
    const candle = candleData.get({ plain: true });
    res.render("candle", candle);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to get one soap
router.get("/soap/:id", async (req, res) => {
  try {
    const soapData = await Soap.findByPk(req.params.id);
    if (!soapData) {
      res.status(404).json({ message: "No soap with this id" });
      return;
    }
    const soap = soapData.get({ plain: true });
    res.render("soap", soap);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
