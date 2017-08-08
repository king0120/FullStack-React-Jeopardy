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

  _submitAnswer = (e, question, id) => {
    e.preventDefault();
    const answerGiven = e.target.answer.value;
    const newState = {...this.state}
    if (answerGiven == question.answer){
      console.log("Correct")
      newState.game.points += question.value;
    } else {
      console.log("Incorrect")
      newState.game.points -= question.value;
    }
    newState.game.board[id] = true;
    console.log(newState.game.board);
    this.setState({game: newState.game});
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