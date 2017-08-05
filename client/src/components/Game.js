import React, { Component } from 'react';
import GameBoard from './GameBoard';
import styled from 'styled-components';

const GameStyles = styled.div`
  background: rgba(0,0,0,.6);
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
`;

class Game extends Component {
  render() {
    return (
      <GameStyles>
        <h1>This Is Jeopardy!</h1>
        <h3>Welcome username</h3>
        <GameBoard />
      </GameStyles>
    );
  }
}

export default Game;