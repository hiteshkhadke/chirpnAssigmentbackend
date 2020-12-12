const connection = require("./connections/connection");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const CustomerController = require("./controllers/customer.controller");
const cors = require("cors");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors());

app.use("/api/", CustomerController);

app.listen("3000", () => {
  console.log("Server Started..");
});
