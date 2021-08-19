const express = require('express');
const router = express.Router();
const db = require('../models');

// All routes start with /api/fishes

// Route to get all fish in DB
router.get('/', (req,res) => {
    db.Fish.findAll().then((fishes) => {
        res.json(fishes)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
});

// Route to add a fish
router.post('/', (req,res) => {
    db.Fish.create({
        name: req.body.name,
        width: req.body.width,
        color: req.body.color
    }).then((newFish) => {
        res.json(newFish);
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
});

// Route to delete fish
router.delete('/:id', (req,res) => {
    db.Fish.destroy({
        where: {
            id: req.params.id
        }
    }).then((deletedFish) => {
        res.json(deletedFish)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})

module.exports = router;