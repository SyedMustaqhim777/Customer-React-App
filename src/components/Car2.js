import React, { Component } from "react";

//Class Based Component
class Car2 extends Component {
  //mandatory to get props
  constructor(props) {
    super(props);
  }

  //when the compoent is about to be launched
  componentWillMount() {
    // API CALLS
    // Initialization to send data
    // subscription initiation
    console.log("componentWillMount");
  }

  //after the component is launched
  componentDidMount() {
    // api call
    console.log("componentDidMount");
  }

  //when there are new changes to update the component
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //this is called before component is being removed
  componentWillUnmount() {
    //unsubcription
    //close
    console.log("componentWillUnmount");
  }

  render() {
    const { model, manufacturer, year } = this.props;

    return (
      <div>
        <h1>Car Model: {model}</h1>
        <h4>Car Manufacturer: {manufacturer}</h4>
        <p>Purchase Year: {year}</p>
      </div>
    );
  }
}

export default Car2;
