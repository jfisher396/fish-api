const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

// All routes start with /api/users

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

router.post("/login", (req, res) => {
  db.User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(404).send("No user found with that email");
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send(`You are logged in under ${user.email}`);
        } else {
          res.status(401).send("Incorrect password");
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
