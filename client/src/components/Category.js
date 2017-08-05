import React from 'react';
import Question from './Question';
import styled from 'styled-components';

const CategoryStyles = styled.div`
  width: 20%;
  height: 100%;
`;

const Category = () => {
  const testQuestions = [200,400,600,800,1000]
  return (
    <CategoryStyles>
      <h1>CATEGORY</h1>
      {testQuestions.map(i => <Question key={i} />)}
    </CategoryStyles>
  );
};

export default Category;