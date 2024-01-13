// Dependencies & Imports
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const path = require("path");
const sequelize = require("./config/connections");
//initialize the Products table
const Products = require("./models/Products");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Default o Handlebars
app.engine("handlebars", exphbs({
  layoutsDir: __dirname + '/views/layouts',
  }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('homepage', {layout : 'all'});
  });

//connect to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} http://localhost:3001`);
  });
});
