import React from 'react';
import Category from './Category';
import styled from 'styled-components';

const GameBoardStyles = styled.div`
  box-sizing: border-box;
  border: 4px solid black;
  display: flex;
  height: 80vh;
  width: 100%;
`;

const GameBoard = (props) => {
  return (
    <GameBoardStyles>
       {props.categories.map((category, i) => { 
         return <Category key={i} category={category}/> 
       })}
    </GameBoardStyles>
  );
};

GameBoard.defaultProps = {
  categories: []
}

export default GameBoard;