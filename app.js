const express = require("express"),
  app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AdminRoute = require("./routes/admin");
const db = require("./util/database");
const sequelize = require("./util/database");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", AdminRoute);
app.get("/", (req, res) => {
  res.send("index.js");
});

app.use("*", function (req, res, next) {
  res.status(404).send("404 not found");
});
app.listen(4000, () => {
  console.log("listen port 4000");
});
