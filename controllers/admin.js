const Product = require("../models/products");

exports.getProduct = (req, res, next) => {
  Product.fecthAll()
    .then(([rows, columns]) => {
      res.send(rows);
    })
    .catch((err) => console.log(err));
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title, req.body.img);
  product.save();
};

exports.updateProduct = (req, res, next) => {};

exports.deleteProduct = (req, res, next) => {};
