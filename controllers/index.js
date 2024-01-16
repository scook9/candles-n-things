const router = require("express").Router();

const apiRoutes = require("./api");
const shopRoutes = require("./shop");
const homeRoutes = require("./home-routes.js");
const cartRoutes = require("./cart")

//http://localhost:3001/
router.use("/api", apiRoutes);
router.use("/shop", shopRoutes);
router.use("/", homeRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
