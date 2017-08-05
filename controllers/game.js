const express = require('express');
const Game = require('../models/game');
const router = express.Router();

router.get("/", (req,res) => {
  Game.findOne({}).then((games) => {
    res.json(games);
  });
});

module.exports = router;