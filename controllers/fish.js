const express = require("express");
const router = express.Router();
const db = require("../models");

// All routes start with /api/fishes

// Route to get all fish in DB
router.get("/", (req, res) => {
  db.Fish.findAll()
    .then((fishes) => {
      res.json(fishes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

// Route to add a fish
router.post("/", (req, res) => {
  if (!req.session.user) {
    res.status(401).send("Login required");
  } else {
    db.Fish.create({
      width: req.body.width,
      color1: req.body.color1,
      color2: req.body.color2,
    })
      .then((newFish) => {
        res.json(newFish);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  }
});

// Route to delete fish
router.delete("/:id", (req, res) => {
  db.Fish.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedFish) => {
      res.json(deletedFish);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

// Route to update fish

router.put("/:id", (req, res) => {
  db.Fish.update(
    {
      width: req.body.width,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedFish) => {
      res.json(updatedFish);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
