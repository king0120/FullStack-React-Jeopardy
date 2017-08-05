import React from 'react';
import styled from 'styled-components';

const QuestionStyles = styled.div`
  background: #2a3698;
  color: #ffff5f;
  border: 3px solid black;
  height: 125px;
`;

const Question = (props) => {
  return (
    <QuestionStyles>
      {props.question.value}
    </QuestionStyles>
  );
};

export default Question;