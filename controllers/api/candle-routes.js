const router = require("express").Router();

//http://localhost:3001/api/candle/
//get all candles
router.get("/", async (req, res) => {
  try {
    const candleData = await Candle.findAll();
    if (!candleData) {
      res.status(404).json({ message: "No candle data found" });
      return;
    }
    //const candle = candleData.get({ plain: true });
    //res.render("candle", candle);
    res.status(200).json(candleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one candle by id
//http://localhost:3001/api/candle/:id
router.get("/:id", async (req, res) => {
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

module.exports = router;
