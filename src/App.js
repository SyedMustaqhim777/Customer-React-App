// import "./App.css";
// import Person from "./components/Person";
// import User from "./components/User";
// import Timer from "./components/Timer";
// import ToDoApp from "./components/ToDoApp";
// import Car from "./components/Car";
// import Car2 from "./components/Car2";
// import ToDoList from "./components/ToDoList";
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import About from './containers/About';
import CustomerApp from './containers/CustomerApp';
import Customer from './containers/Customer';
import CustomerAdd from './containers/CustomerAdd';
import CustomerEdit from './containers/CustomerEdit';





function App() {
  return (
    <Router>
    <div style={{marginLeft:'20px'}}>       
       <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/customer' component={Customer} />
          <Route exact path='/customer/add' component={CustomerAdd} />
          <Route exact path='/customer/edit/:id' component={Customer} />
          <Route exact path='/customer-app' component={CustomerApp} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
       </Switch>
    </div>
 </Router>
  );
}
export default App;
