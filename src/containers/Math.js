import React, { Component } from 'react'


export default class Math extends Component {
    state = {items: [], A: "", B: ""};
    constructor(p) {
        super(p);
    }


    render() {
        return(
            <div>
            <input type="number"
            name="number"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Enter a number"
          /><br/><br/>
            <input type="number"
            name="number"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Enter another number"
          /><br/><br/>
            </div>


        )
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    Add = (num1, num2) => {
        return (num1 + num2)
    }

    Subtract = (num1, num2) => {
        return (num1 - num2)
    }

    Multiply = (num1, num2) => {
        return (num1 * num2)
    }

    getInitialState= () => {
        return this.state;



};


class MathAdd extends Component{
    render(){
        return(
            const {}

        )

        }
    }