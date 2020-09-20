import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button} from 'react-bootstrap';

function Login(props) {
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin");
  var handleChange = (e) => {
     console.log("ghhgsdhgf")
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
const onSubmit = ()=>{
   if(email === password){
     localStorage.setItem('user', email);
      props.history.push('/customer-app');
   }else{
      alert('Incorrect email or password. Please try again.')
   }
}

  return (
   <Form>
     <br/>
     <br/>
   <Form.Group controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" onChange={handleChange} placeholder="Enter email" />
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>
 
   <Form.Group controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" onChange={handleChange} placeholder="Password" />
   </Form.Group>
   <Button variant="primary" onClick={onSubmit} type="submit">
     Submit
   </Button>

 </Form>
  )
//   return (
//     <div className="wrapper fadeInDown">
//       <div id="formContent">
//         <div className="fadeIn first">
//           <img
//             src="http://danielzawadzki.com/codepen/01/icon.svg"
//             id="icon"
//             alt="User Icon"
//             />
//         </div>

//         <form>
//           <input
//             type="text"
//             id="login"
//             className="fadeIn second"
//             name="login"
//             placeholder="login"
//           />
//           <input
//             type="text"
//             id="password"
//             className="fadeIn third"
//             name="login"
//             placeholder="password"
//           />
//           <input type="submit" className="fadeIn fourth" value="Log In" />
//         </form>

//         <div id="formFooter">
//           <a className="underlineHover" href="#">
//             Forgot Password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );

  }
export default Login;


  /* 
<h2>Login</h2>
<input name="email" onChange={handleChange} placeholder="email" value={email}/><br/><br/>
<input name="password" type="password" onChange={handleChange}  placeholder="password" value={password}/><br/><br/>
<button onClick={()=>{
   if(email === password){
      props.history.push('/customer-app');
   }else{
      alert('Incorrect email or password. Please try again.')
   }
}}>Submit</button> */
