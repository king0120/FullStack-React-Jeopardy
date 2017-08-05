import React from 'react';
import styled from 'styled-components';

const QuestionStyles = styled.div`
  background: #2a3698;
  color: #ffff5f;
  border: 3px solid black;
`;

const Question = () => {
  return (
    <QuestionStyles>
      question
    </QuestionStyles>
  );
};

export default Question;