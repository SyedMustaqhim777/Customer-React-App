import React, { Component } from 'react'

export default class ToDoList extends Component {
    state = {items: [], text: ""};

    constructor(_props){
        super(_props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

render() {
    return (
      <div>
        <h3> To-Do List</h3>
        <h2>sum = {this.state.sum}</h2>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text}/> &nbsp;
            {/* <button onClick= {()=>{this.state.items.length + 1}} > Add me </button> */}


        </form>
      </div>
    );
  }


  handleChange = (input) => {
    this.setState({ text: input.target.value });
  };
}