const db = require("../util/database");

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO `node-complete`.`products` (title,price,imageUrl,description) values (?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("select * from `node-complete`.products;");
    // .then((results) => {
    //   console.log(results);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  static findById(id) {
   return db.execute("select * from `node-complete`.products AS products WHERE products.id=?",[id]);
  }
};
