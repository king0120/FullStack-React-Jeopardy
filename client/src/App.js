import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";
import AddCategory from "./components/AddCategory";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/add-category">Add Category</Link>
          </div>
          <div className="App">
            <Route exact path="/" component={Game} />
            <Route path="/add-category" component={AddCategory} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
