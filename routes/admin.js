const express = require("express"),
  router = express.Router();

//import controller
const adminController = require("../controllers/admin");

router
  .route("/admin")
  .get(adminController.getProduct)
  .delete(adminController.deleteProduct)
  .post(adminController.postProduct);

module.exports = router;
