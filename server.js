const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const GameController = require('./controllers/game');
const CategoriesController = require('./controllers/categories');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fullstack-jeopardy');

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.use('/api/game', GameController);
app.use('/api/category', CategoriesController);

app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})