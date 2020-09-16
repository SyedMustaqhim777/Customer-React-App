import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { CUSTOMERS_API } from "../services/api";
import { Table, Button} from "react-bootstrap";


export default function CustomerList(props) {
  const [loadedCustomers, setLoadedCustomers] = useState(false);
  //customers array
  const [customers, setCustomers] = useState([]);

  //used to make async calls & useEffect is called on every re-render
  useEffect(() => {
    if (!loadedCustomers) {
      fetch(CUSTOMERS_API) //gives response
        .then((res) => res.json()) //convers response from raw format to json object
        .then(
          (result) => {
            setCustomers(result);
            setLoadedCustomers(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            //manage error
          }
        );
    }
  });

  const doDelete = (record) => {
    fetch(CUSTOMERS_API, {
      method: "delete",
      body: JSON.stringify(record),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setLoadedCustomers(false);
        },
        (error) => {}
      );
  };

  return (
    <div>
      <Menu />
      <h3>Customers</h3>
      {/* {loadedCustomers === false ? <h1>Loading</h1> : <h1>Loaded </h1>} */}
      <Button
        onClick={() => {
          props.history.push("/customer/add");
        }}
      >
        Add Customer
      </Button>
      {/* <Link to="/customer/add"> Add Customer </Link> */}
      <br />
      <br />
      <Table striped bordered hover size="sm" variant='dark'>
        <thead>
          <tr>
            <th width="20px">No</th>
            <th width="250px">Name</th>
            <th width="220px">Email</th>
            <th width="100px">Phone</th>
            <th width="300px">Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>
                <Button
                  onClick={() => {
                    props.history.push("/customer/add/" + item.id);
                  }} variant="warning" size='sm'
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button onClick={() => doDelete(item)} variant="danger" size='sm'>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
