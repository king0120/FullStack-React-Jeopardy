import React, { Component } from 'react';
import GameBoard from './GameBoard';
import axios from 'axios';
import styled from 'styled-components';

const GameStyles = styled.div`
  background: rgba(0,0,0,.6);
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
`;

class Game extends Component {
  constructor(){
    super();
    this.state = {
      game: {}
    }
  }

  componentWillMount(){
    axios.get(`/api/game/${this.props.match.params.gameId}`).then(res => {
      this.setState({game: res.data});
    });
  }

  // Notice we pass 3 arguments to the function
  _submitAnswer = (e, question, id) => {
    //Prevents page refresh
    e.preventDefault();
    //Grabs the user input value
    const answerGiven = e.target.answer.value;

    //Creates a new copy of the state.
    const newState = {...this.state}

    //Update the points based on whether or not the answer is correct.
    if (answerGiven === question.answer){
      newState.game.points += question.value;
    } else {
      newState.game.points -= question.value;
    }
    //Change the flag that tracks which questions have been answered
    newState.game.board[id] = true;

    //Update our state in the client
    this.setState({game: newState.game});
    //Update our Game in the DB
    axios.put('/api/game/' + this.state.game._id, newState).then((res) => {
      console.log("Successful update");
    });
  }

  render() {
    return (
      <GameStyles>
        <h1>This Is Jeopardy!</h1>
        <h3>Welcome {this.state.game.user}</h3>
        <h3>Points: {this.state.game.points}</h3>
         <GameBoard board={this.state.game.board} categories={this.state.game.categories} submitAnswer={this._submitAnswer}/> 
      </GameStyles>
    );
  }
}

export default Game;