import React from "react";
export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    console.log(">>constructor");
  }
  state = { seconds: 0, resetSeconds : 0};
  count = 0;
  interval;
  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1,
    }));
  }

  componentWillMount() {
    console.log(">>componentWillMount");
  }
  componentDidMount() {
    //when component added to Parent
    //called after component added to parent
    console.log(">>componentDidMount");
    // this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentWillUnmount() {
    //when component going be removed from Parent
    clearInterval(this.interval);
  }
  stopCounter() {
    this.count = 1;
    /*this.setState({
      seconds: 100
    }); */
    //this.forceUpdate();
    clearInterval(this.interval);
    this.interval = ""
    console.log("interval is " + this.interval + " state:" + this.count);
  }

  resetCounter() {
    this.setState({seconds: this.state.resetSeconds});
  }

  startCounter() {
    // this.state.seconds = 0;
    if(!this.interval) {
      this.tick();
      this.interval = setInterval(() => this.tick(), 1000);
    
    }
 
  }

  setCounterval() {}
  render() {
    return (
      <div>
        Seconds: {this.state.seconds};
        <div>
          <input
            type="button"
            onClick={() => this.startCounter()}
            value="Start Counter"
          />
        </div>{" "}
        &nbsp;
        <div>
          <input
            type="button"
            onClick={() => this.stopCounter()}
            value="Stop this Counter"
          />
        </div>{" "}
        &nbsp;
        <div>
          <input
            type="text"
            onChange={(input) => {this.setState({ resetSeconds: parseInt(input.target.value) })}}
            value={this.state.resetSeconds}
          />
        </div>{" "}
        &nbsp;
        <div>
          <input
            type="button"
            onClick={() => this.resetCounter()}
            value="Reset Counter"
          />
        </div>{" "}
        &nbsp;
      </div>
    );
  }
}
