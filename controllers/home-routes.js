const router = require("express").Router();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

// route to get home page
//http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    //send to homepage later, all currently
    res.status(200).render('homepage', {layout : 'all'});
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to shop page




//need route to cart

module.exports = router;
