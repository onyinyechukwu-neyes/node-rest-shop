const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
//Routes
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
require("./db");

const app = express();

//MIDDLEWARES
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes which should handle request
app.use(productRoutes);
app.use(orderRoutes);

//CORS Middleware
app.use((req, res, next) => {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
  );
  next();
});
module.exports = app;
