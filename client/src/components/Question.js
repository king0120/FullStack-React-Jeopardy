import React, { Component } from "react";
import styled from "styled-components";

const QuestionStyles = styled.div`
  background: ${props => props.answered ? "grey" : "#2a3698"};
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
    return (
      <QuestionStyles answered={this.state.answered}>
        {this.state.active ? 
          <ActiveQuestion submitAnswer={(e) => this.props.submitAnswer(e, this.props.question, this.props.id)} question={this.props.question.question}/> : 
          <div onClick={this._toggleActive}>{this.props.question.value}</div>
        }
      </QuestionStyles>
    );
  }
}

export default Question;
