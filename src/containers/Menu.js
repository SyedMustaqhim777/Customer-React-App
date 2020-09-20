import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomersList from "../containers/Customer";
import {Badge} from 'react-bootstrap'

function Menu() {
    const doLogout= ()=>{
      localStorage.removeItem('user');
    }
  return (
    <div><br/>
      <h4>
        Welcome to React <Badge variant="secondary">syed mustaqhim</Badge>
      </h4>
      <Link to={"/home"}> &nbsp; Home</Link>  &nbsp;
      <Link to={"/Customer"}>Customers</Link>  &nbsp;
      <Link to={"/customer-app"}>CustomerApp</Link>  &nbsp;
      <Link to={"/student-app"}>StudentApp</Link>{" "}
      &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      {/* <Link to={'/temperature'}>Temperature</Link> |  */}
      <Link to={"/about"}>About</Link> &nbsp; &nbsp;
      <Link onClick={doLogout} to={'/Login'}>Logout</Link>
      <hr />
      
    </div>  );
}

export default Menu;
