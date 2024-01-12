const router = require("express").Router();

const candleRoutes = require("./candle-routes.js");
const soapRoutes = require("./soap-routes.js");

//need to determine routes
//http://localhost:3001/api/candle
router.use("/candle", candleRoutes);
//http://localhost:3001/api/soap
router.use("/soap", soapRoutes);

module.exports = router;
