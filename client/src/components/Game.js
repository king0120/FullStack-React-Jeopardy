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
    axios.get('/api/game').then(res => {
      this.setState({game: res.data});
    });
  }
  render() {
    return (
      <GameStyles>
        <h1>This Is Jeopardy!</h1>
        <h3>Welcome {this.state.game.user}</h3>
         <GameBoard categories={this.state.game.categories}/> 
      </GameStyles>
    );
  }
}

export default Game;