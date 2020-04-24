const express = require("express");
const router = express.Router();

//Model
const Product = require("../../models/modelProduct");

router.get("/products", (req, res, next) => {
  Product.find({}, (err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send({
      message: "Products fetched successfully.",
      product,
    });
  });
});

router.post("/products", (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then(() => {
      res.status(201).json({
        message: "Product created",
        createdProduct: product,
      });
    })
    .catch((err) => console.log(err));
});
router.get("/products/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id, (err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json({ message: "product fatched", product });
  });
});
router.delete("/products/:productId", (req, res) => {
  const id = req.params.productId;
  Product.deleteOne({ id }, (err, product) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send({
        message: "deleted successfully",
        product,
      });
    }
  });
});
module.exports = router;
