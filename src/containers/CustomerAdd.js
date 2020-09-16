import React, { useState, useEffect } from "react";
import { CUSTOMERS_API } from "../services/api";

function AddCutomer(props) {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [label, setLabel] = useState("Add Customer");
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      setInit(true);

      const { params } = props.match;

      //means its edit
      if (params.id != undefined) {
        setLabel("Update");

        fetch(CUSTOMERS_API + "/" + params.id)
          .then((res) => res.json())
          .then(
            (result) => {
              setID(result.id);
              setName(result.name);
              setEmail(result.email);
              setPhone(result.phone);
              setAddress(result.address);
            },

            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              //manage error
            }
          );
      }
    }
  });

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
  };

  var addUpdateCustomer = () => {
    const methodType = "post";

    const customer = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };

    if (id != 0) {
      //for edit
      methodType = "put";
      customer.id = id;
    }

    fetch(CUSTOMERS_API, {
      method: methodType,
      body: JSON.stringify(customer),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(function (result) {
      props.history.push("/customer");
    });
  };

  return (
    <div>
      <h2>Add Customer</h2>

      <input
        name="name"
        onChange={handleChange}
        placeholder="name"
        value={name}
      />
      <br />
      <br />

      <input
        name="email"
        onChange={handleChange}
        placeholder="email"
        value={email}
      />
      <br />
      <br />

      <input
        name="address"
        onChange={handleChange}
        placeholder="address"
        value={address}
      />
      <br />
      <br />

      <input
        name="phone"
        onChange={handleChange}
        placeholder="phone"
        value={phone}
      />
      <br />
      <br />

      <button onClick={addUpdateCustomer}>{label}</button>
    </div>
  );
}

export default AddCutomer;
