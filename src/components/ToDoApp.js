import React from "react";

export default class TodoApp extends React.Component {
  //immutable => cannot be modified
  state = { items: [], text: "" , sum : 0};

  constructor(_props) {
    super(_props);
    //Another approach to handle this
    // this.handleChange = this.handleChange.bind(this); // line handles this pointer
    //this.handleSubmit = this.handleSubmit.bind(this); // line handles this pointer
  }


  
  //local storage => state => (halat)
  // store the input value => list of todo
  // current value that they enter   g

  //re-rendering happens after setState

  componentWillMount() {
    //call api to fetch
    // locally update state wth new values
  }


  render() {
    console.log("RENDER", this.state);

    return (
      <div>
        <h3>TODO</h3>
        <h2>sum = {this.state.sum}</h2>
        <TodoList items={this.state.items} />
        {/* <form onSubmit={this.handleSubmit}> */}
        <input  onChange={this.handleChange} value={this.state.text} />

        <button
          onClick={() => {
            const { items, text, sum} = this.state;
            const newSum = sum + parseInt(text)
            const item = {
              id: new Date(),
              text: text,
            };
            items.push(item);
            
            this.setState({ items: items, text: "" , sum : newSum}); //async
            //api call
          }}
        >
          Add me
        </button>
        {/* </form> */}
      </div>
    );
  }

  // List of todo and have a button to add more

  handleChange = (input) => {
    this.setState({ text: input.target.value });
  };

  // handleSubmit(input) {
  //   input.preventDefault();
  //   if (!this.state.text.length) {
  //     return;
  //   }
  //   const newItem = {
  //     text: this.state.text,
  //     id: Date.now(),
  //   };
  //   this.setState((prevState) => ({
  //     items: prevState.items.concat(newItem),
  //     text: "",
  //   }));
  // }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
