const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res) => {
  db.User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  })
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
