import React from "react";
import Menu from "../containers/Menu";
import customerService from "../services/customer";
import { Table, Button } from "react-bootstrap";
export default class CustomerApp extends React.Component {
  state = {
    items: customerService.getRecords(),
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    buttonLabel: "Add Customer",
  };
  constructor(p) {
    super(p);
    //Another approach to handle this
    // this.handleChange = this.handleChange.bind(this); // line handles this pointer
    // this.handleSubmit = this.handleSubmit.bind(this); // line handles this pointer
  }
  render() {
    return (
      <div>
        <Menu />
        <h4>Customer Application</h4>
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
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="email"
          />
          <br />
          <br />
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            placeholder="phone"
          />
          <br />
          <br />
          <input
            type="text"
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
            placeholder="address"
          />
          <br />
          <br />
          <Button>{this.state.buttonLabel}</Button>
          <br />
          <br />
        </form>
        <CustomerList
          items={this.state.items}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
  handleChange = (e) => {
    //setState is lazy function
    // currentState + 1
    // twice
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteItem = (id) => {
    console.log();
    customerService.deleteRecord(id);
    // var temp = this.state.items.filter(item => item.id !== id)
    this.setState({ items: customerService.getRecords() });
  };

  addUpdateItem = (e) => {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };
    if (this.state.id !== "") {
      newItem.id = this.state.id;
      customerService.updateRecord(newItem);
      this.state.items = customerService.getRecords();
    } else {
      newItem.id = Date.now();
      customerService.addRecord(newItem);
      this.state.items = customerService.getRecords();
    }
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      id: "",
      buttonLabel: "Add Customer",
    });
  };
  editItem = (id) => {
    console.log("edit id:" + id);
    var temp = this.state.items.filter((item) => item.id === id);
    if (temp.length == 1) {
      this.setState({
        id: temp[0].id,
        name: temp[0].name,
        email: temp[0].email,
        phone: temp[0].phone,
        address: temp[0].address,
        buttonLabel: "Update Customer",
      });
    }
  };
}

class CustomerList extends React.Component {
  render() {
    return (
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th width="20px">No</th>
            <th width="250px">Name</th>
            <th width="220px">Email</th>
            <th width="100px">Phone</th>
            <th width="100px">Address</th>
            <th width="10px"> Edit </th>
            <th width="20px"> Delete </th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td id={item.id}>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>
                <Button
                  onClick={() => this.props.editItem(item.id)}
                  variant="warning"
                  size="sm"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => this.props.deleteItem(item.id)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
