const express = require('express');
const Question = require('../models/Question');
const Category = require('../models/Category');
const Game = require('../models/game');
const router = express.Router();


router.get("/", (req,res) => {
  Game.find().then(games => {
    res.json(games);
  })
});

router.post("/new", (req,res) => {
  Category.find().then((categories) => {
    const newGame = new Game();
    const randomCategories = [...Array(6)].map((i) => {
      const randomVal = Math.floor(Math.random() * categories.length);
      return categories[randomVal];
    });

    newGame.categories = randomCategories;
    newGame.user = req.body.user;
    newGame.points = 0;
    
    newGame.save().then(game => {
      res.json(game);
    });
  });
});

router.get("/:id", (req,res) => {
  Game.findById(req.params.id).then((games) => {
    res.json(games);
  });
});

router.put("/:id", (req,res) => {
  Game.findOneAndUpdate({_id: req.params.id}, {points: req.body.game.points}).then((game) => {
    res.json(game);
  })
  .catch(err => console.log(err));
});

module.exports = router;