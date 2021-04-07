const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl) {
    (this.id = id), (this.product_title = title), (this.product_img = imageUrl);
  }

  save() {
    return db.execute(
      "INSERT INTO products (product_title,product_img) VALUES (?,?)",
      [this.product_title, this.product_title]
    );
  }

  static deleteById(id) {}

  static fecthAll() {
    return db.execute("SELECT * FROM `node-complete`.products");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
