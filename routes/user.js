const express = require("express");
const Product = require("../models/products");
const userRoutes = express.Router();
const userController = require("../controllers/user");

userRoutes
  .use("/user")
  .get(userController.userGetProducts)
  .post(userController.userPosrProduct);
