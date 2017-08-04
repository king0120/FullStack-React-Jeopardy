const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  value: Number,
  question: String,
  answer: String
});

const categorySchema = mongoose.Schema({
  name: String,
  questions: [questionSchema],
});

const gameSchema = mongoose.Schema({
  user: String,
  points: Number,
  categories: [categorySchema],
});

const Question = mongoose.model('Question', questionSchema);
const Category = mongoose.model('Category', categorySchema);
const Game = mongoose.model('Game', gameSchema);