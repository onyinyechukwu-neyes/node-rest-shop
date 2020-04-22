const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const moongoose = require("mongoose");

//Routes
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
//Connect to DB
moongoose.connect(
  "mongodb+srv://node-rest-shop:" + process.env.DB_CONNECTION +"@node-rest-shop-3ytd8.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  },
  () => {
    console.log("Connected to DB!");
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
});

//Routes which should handle request
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
