const express = require('express');
const Question = require('../models/question');
const Category = require('../models/category');
const router = express.Router();

router.get("/", (req,res) => {
  Category.find({}).then((categories) => {
    res.json(categories);
  });
});

router.post("/", (req, res) => {
  const questions = req.body.questions.map(question => {
    return new Question(question);
  });
  const category = new Category({
    name: req.body.category,
    questions
  });
  category.save().then((category) => {
    console.log("Success!");
    res.json(category);
  });
})

module.exports = router;