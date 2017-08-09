import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      redirect: false,
      games: []
    };
  }

  componentWillMount() {
    axios.get("/api/game").then(res => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
  }
  _changeEvent = e => {
    this.setState({ user: e.target.value });
  };
  _createNewGame = () => {
    axios.post("/api/game/new", { user: this.state.user }).then(res => {
      console.log(res.data);
      this.setState({ gameId: res.data._id, redirect: true });
    });
  };
  render() {
    return this.state.redirect
      ? <Redirect to={{ pathname: "/game/" + this.state.gameId }} />
      : <div>
          <h1>What is your username?</h1>
          <input onChange={this._changeEvent} type="text" name="user" />
          <button onClick={this._createNewGame}>New Game</button>
          {this.state.games.map(game =>
            <div>
              <Link to={`/game/${game._id}`}>
                {game.user}'s Game
              </Link>
            </div>
          )}
        </div>;
  }
}

export default Home;
