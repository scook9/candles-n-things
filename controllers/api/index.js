const router = require("express").Router();

//http://localhost:3001/api/
router.get("/cart/:id", async (req, res) => {
  try {
    const dbCartData = await Products.findByPk(req.params.id);
    res.status(200).json(dbCartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
