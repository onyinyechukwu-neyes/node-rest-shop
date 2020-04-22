const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Model
const Product = require("../../models/modelProduct");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get products"
  });
});
router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {console.log(result);})
    .catch(err => console.log(err));
  res.status(201).json({
    message: "Post products",
    createdProduct: product
  });
});
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => console.log(err));
});

module.exports = router;
