const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "views")));

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", "views");

const passwordRoutes = require("./routes/password");

app.use(passwordRoutes);


app.listen(process.env.PORT, () => {
  console.log(`listening *:${process.env.PORT}`);
});
