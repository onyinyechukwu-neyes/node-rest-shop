const mongoose = require("mongoose");

const options = {
  dbName: "ShopAPI",
  user: "node-rest-shop",
  pass: "noderestshop",
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(
  "mongodb+srv://node-rest-shop-3ytd8.mongodb.net/",
  options,

  (err, client) => {
    if (err) {
      console.log("Could not connect to database! ", err);
    } else {
      console.log("Connection to database established...");
    }
  }
);

// require any models

require("./models/modelProduct");
require("./models/modelOrder");
