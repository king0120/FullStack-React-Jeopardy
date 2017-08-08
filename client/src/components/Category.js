import React from 'react';
import Question from './Question';
import styled from 'styled-components';

const CategoryStyles = styled.div`
  width: 20%;
  height: 100%;
`;

const Category = (props) => {
  return (
    <CategoryStyles>
      <h1>{props.category.name}</h1>
      {props.category.questions.map((question, i) => <Question key={i} id={(props.id * 5) + i} board={props.board} question={question} submitAnswer={props.submitAnswer}/>)}
    </CategoryStyles>
  );
};

Category.defaultProps = {
  category: {
    questions: []
  }
}

export default Category;