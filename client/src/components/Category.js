import React from 'react';
import Question from './Question';
import styled from 'styled-components';

const CategoryStyles = styled.div`
  width: 20%;
  height: 100%;
`;

const Category = (props) => {
  const testQuestions = [200,400,600,800,1000]
  return (
    <CategoryStyles>
      <h1>{props.category.name}</h1>
      {props.category.questions.map((question, i) => <Question key={i} question={question} />)}
    </CategoryStyles>
  );
};

Category.defaultProps = {
  category: {
    questions: []
  }
}

export default Category;