import React, { Component } from "react";
import styled from "styled-components";

const QuestionStyles = styled.div`
  background: ${props => props.answered ? "grey" : "#2a3698"};
  color: #ffff5f;
  border: 3px solid black;
  height: 125px;
`;

const ActiveQuestion = (props) => (
  <QuestionStyles answered={props.answered}>
    <div>{props.question}</div>
    <form onSubmit={props.submitAnswer}>
      <input type="text" name="answer"/>
      <button>Submit</button>
    </form>
  </QuestionStyles>
);

class Question extends Component {
  constructor(){
    super();
    this.state = {
      active: false,
      answered: false
    };
  }
  _toggleActive = () => {
    if(!this.state.answered){
      this.setState({active: !this.state.active});
    }
  }
  componentWillMount(){
    if(this.props.board[this.props.id]){
      this.setState({answered: true, active: false})
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.board[this.props.id]){
      this.setState({answered: true, active: false})
    }
  }
  render() {
    if (this.state.active){
      return <ActiveQuestion answered={this.state.answered} question={this.props.question.question}/>;
    } else {
      return <QuestionStyles answered={this.state.answered} onClick={this._toggleActive}>{this.props.question.value}</QuestionStyles>;
    }
  }
}

export default Question;
