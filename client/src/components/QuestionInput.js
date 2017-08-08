import React from "react";

const QuestionInput = props => {
  return (
    <div>
      <label htmlFor={`${props.question.value}question`}>
        {props.question.value} Question:{" "}
      </label>
      <input
        onChange={props._changeEvent}
        type="text"
        name={`${props.question.value}question`}
        points={props.question.value}
        type="question"
        value={props.question.question}
      />
      <label htmlFor={`${props.question.value}answer`}>
        {props.question.value} Answer:{" "}
      </label>
      <input
        onChange={props._changeEvent}
        type="text"
        name={`${props.question.value}answer`}
        points={props.question.value}
        type="answer"
        value={props.question.answer}
      />
      <hr />
    </div>
  );
};

export default QuestionInput;
