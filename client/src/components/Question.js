import React, { Component } from "react";
import styled from "styled-components";

const QuestionStyles = styled.div`
  background: #2a3698;
  color: #ffff5f;
  border: 3px solid black;
  height: 125px;
`;

const ActiveQuestion = (props) => (
  <div>
    <div>{props.question}</div>
    <form onSubmit={props.submitAnswer}>
      <input type="text" name="answer"/>
      <button>Submit</button>
    </form>
  </div>
);

class Question extends Component {
  constructor(){
    super();
    this.state = {
      active: false
    };
  }
  _toggleActive = () => {
    this.setState({active: !this.state.active});
  }
  render() {
    return (
      <QuestionStyles>
        <div>
        {this.state.active ? 
          <ActiveQuestion submitAnswer={(e) => this.props.submitAnswer(e, this.props.question)} question={this.props.question.question}/> : 
          <div onClick={this._toggleActive}>{this.props.question.value}</div>
        }
        </div>
      </QuestionStyles>
    );
  }
}

export default Question;
