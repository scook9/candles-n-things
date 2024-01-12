const router = require("express").Router();

const candleRoutes = require("./candle-routes.js");
const soapRoutes = require("./soap-routes.js");

//need to determine routes
//http://localhost:3001/api/
router.use("/candle", candleRoutes);
router.use("/soap", soapRoutes);

module.exports = router;
