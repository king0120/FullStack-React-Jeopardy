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

const GameBoard = () => {
  const testArray = [1,2,3,4,5,6];
  return (
    <GameBoardStyles>
      {testArray.map((i) => {
        return <Category key={i} />
      })}
    </GameBoardStyles>
  );
};

export default GameBoard;