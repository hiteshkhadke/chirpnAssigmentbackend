const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/CustomerCRUD";

mongoose.connect(dbURL, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("Database Connected..");
  } else {
    console.log("Database Connection failed..");
  }
});

const Customer = require("../models/customer.model");
