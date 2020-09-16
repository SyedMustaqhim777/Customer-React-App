import React, { Component } from "react";
import Menu from "../containers/Menu";
import studentService from "../services/student";

export default class StudentApp extends Component {
  state = {
    items: studentService.getRecords(),
    id: "",
    name: "",
    parent: "",
    class: "",
    subject: "",
    teacher: "",
    city: "",
    country: "",
    buttonLabel: "Add Student",
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu />
        <h3>StudentApp</h3>
        <form onSubmit={this.addUpdateItem}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="name"
          />
          <br />
          <br />
          <input
            type="text"
            name="parent"
            onChange={this.handleChange}
            value={this.state.parent}
            placeholder="parent name"
          />
          <br />
          <br />
          <input
            type="text"
            name="class"
            onChange={this.handleChange}
            value={this.state.class}
            placeholder="class"
          />
          <br />
          <br />
          <input
            type="text"
            name="subject"
            onChange={this.handleChange}
            value={this.state.subject}
            placeholder="subject"
          />
          <br />
          <br />
          <input
            type="text"
            name="teacher"
            onChange={this.handleChange}
            value={this.state.teacher}
            placeholder="teacher name"
          />
          <br />
          <br />
          <input
            type="text"
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
            placeholder="city"
          />
          <br />
          <br />
          <input
            type="text"
            name="country"
            onChange={this.handleChange}
            value={this.state.country}
            placeholder="country"
          />
          <br />
          <br />
          <button>{this.state.buttonLabel}</button>
          <br />
          <br />
        </form>
        <StudentList
          items={this.state.items}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }

  handleChange = (input) => {
    this.setState({ [input.target.name]: input.target.value });
  };

  deleteItem = (id) => {
    studentService.deleteRecord(id);
    this.setState({ items: studentService.getRecords() });
  };

  addUpdateItem = (input) => {
    input.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      parent: this.state.parent,
      subject: this.state.subject,
      class: this.state.class,
      teacher: this.state.teacher,
      city: this.state.city,
      country: this.state.country,
    };
    if (this.state.id !== "") {
      newItem.id = this.state.id;
      studentService.updateRecord(newItem);
      this.state.items = studentService.getRecords();
    } else {
      newItem.id = Date.now();
      studentService.addRecord(newItem);
      this.state.items = studentService.getRecords();
    }
    this.setState({
      name: "",
      parent: "",
      subject: "",
      class: "",
      teacher: "",
      city: "",
      country: "",
      buttonLabel: "Add Student",
    });
  };

  editItem = (id) => {
    var temp = this.state.items.filter((item) => item.id === id);
    if (temp.length == 1) {
      this.setState({
        id: temp[0].id,
        name: temp[0].name,
        parent: temp[0].parent,
        subject: temp[0].subject,
        class: temp[0].class,
        teacher: temp[0].teacher,
        city: temp[0].city,
        country: temp[0].country,
        buttonLabel: "Update Student",
      });
    }
  };
}

class StudentList extends Component {
  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th width="20px">No.</th>
            <th width="250px">parent name</th>
            <th width="220px">subject</th>
            <th width="100px">class</th>
            <th width="300px">teacher.</th>
            <th width="20px">city</th>
            <th width="20px">country</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.parent}</td>
              <td>{item.subject}</td>
              <td>{item.class}</td>
              <td>{item.teacher}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>
                <button onClick={() => this.props.editItem(item.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => this.props.deleteItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
