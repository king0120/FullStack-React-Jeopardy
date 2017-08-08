import React, { Component } from "react";
import axios from "axios";
import QuestionInput from "./QuestionInput";

class AddCategory extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      questions: [
        {
          value: 200,
          question: "",
          answer: ""
        },
        {
          value: 400,
          question: "",
          answer: ""
        },
        {
          value: 600,
          question: "",
          answer: ""
        },
        {
          value: 800,
          question: "",
          answer: ""
        },
        {
          value: 1000,
          question: "",
          answer: ""
        }
      ]
    };
  }

  _changeEvent = e => {
    if (e.target.attributes.name.value === "category"){
      this.setState({category: e.target.value});
      return;
    }
    const newState = { ...this.state };
    const pointValue = e.target.attributes.points.value;
    const typeValue = e.target.attributes.type.value;
    const changedQuestion = newState.questions.find(v => {
      return v.value === parseInt(pointValue);
    });

    if (typeValue === "question") {
      changedQuestion.question = e.target.value;
    } else if( typeValue === "answer" ) {
      changedQuestion.answer = e.target.value;
    }

    this.setState(newState);
  };

  _addNewCategory = e => {
    e.preventDefault();
    axios.post("/api/category", this.state).then(res => {
      console.log(res.data);
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this._addNewCategory}>
          <label htmlFor="category">Category: </label>
          <input onChange={this._changeEvent} type="text" name="category" value={this.state.category} />
          <br />
          <br />
          {this.state.questions.map((q, i) => {
            return (
              <QuestionInput
                key={i}
                question={q}
                _changeEvent={this._changeEvent}
              />
            );
          })}
          <button>Save Category</button>
        </form>
      </div>
    );
  }
}

export default AddCategory;
