const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

//http://localhost:3001/
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
