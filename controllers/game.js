const express = require('express');
const Game = require('../models/game');
const router = express.Router();

router.get("/", (req,res) => {
  Game.findOne({}).then((games) => {
    res.json(games);
  });
});

router.put("/:id", (req,res) => {
  Game.findOneAndUpdate(req.body.game).then((game) => {
    res.json(game);
  })
});

module.exports = router;