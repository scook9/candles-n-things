const router = require("express").Router();

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const { Products } = require("../../models");


// route to get shop page
//http://localhost:3001/shop

router.get("/", async (req, res) => {
  try {
    const dbProductData = await Products.findAll();
    if (!dbProductData) {
      return res.status(404).json({ message: "Products not found" });
    }
    const products = dbProductData.map((productList) =>
      productList.get({ plain: true })
    );
    


//     res.render("homepage", { layout: "shop", products });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
