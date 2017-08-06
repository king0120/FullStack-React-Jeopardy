const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.get("/", (req,res) => {
  Category.findOne({}).then((games) => {
    res.json(games);
  });
});

module.exports = router;