import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustomersList from '../containers/Customer';


function Menu() {
    return (
        <div>
            <h2> Welcome to React Router Tutorial</h2> 
                <Link to={'/home'}> &nbsp; Home</Link> | &nbsp;
                <Link to={'/Customer'}>Customers</Link> | &nbsp;
                <Link to={'/customer-app'}>CustomerApp</Link> | &nbsp;
                <Link to={'/student-app'}>StudentApp</Link> | &nbsp;
                <Link to={'/temperature'}>Temperature</Link> | &nbsp;
                <Link to={'/about'}>About</Link> | &nbsp;
                <Link to={'/login'}>Logout</Link>
            <hr />       
        </div>
    );
}

export default Menu;




