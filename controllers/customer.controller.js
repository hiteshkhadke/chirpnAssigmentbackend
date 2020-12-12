const express = require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer.model");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Default route received");
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customers", (req, res) => {
  console.log("/customers get route received");
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/id/:id", (req, res) => {
  console.log("/customer/id/ get route received");
  const query = Customer.where({ _id: req.params._id });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/firstName/:firstName", (req, res) => {
  console.log("/customer/firstName/ get route received");
  const query = Customer.where({ firstName: req.params.firstName });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/lastName/:lastName", (req, res) => {
  console.log("/customer/lastName/ get route received");
  const query = Customer.where({ lastName: req.params.lastName });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/age/:age", (req, res) => {
  console.log("/customer/age/ get route received");
  const query = Customer.where({ age: req.params.age });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.post("/customers", (req, res) => {
  console.log("/customers post route received");
  var newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });
  newCustomer.save((err, data) => {
    if (!err) res.json(data);
    else res.json(err);
  });
});

router.put("/customers/update/:id", (req, res) => {
  console.log("/customers/update/ put route received");
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  const query = Customer.where({ _id: req.params.id });
  var customer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };
  Customer.findByIdAndUpdate(
    req.params.id,
    { $set: customer },
    { new: true },
    (err, data) => {
      if (!err) res.json(data);
      else res.json(err);
    }
  );
});

router.delete("/customers/delete/:id", (req, res) => {
  console.log("/customers/delete/ delete route received");
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  Customer.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) res.json(data);
    else res.json(err);
  });
});

module.exports = router;
