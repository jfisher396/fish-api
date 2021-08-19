const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('here fishy fishy');
})

module.exports = router;