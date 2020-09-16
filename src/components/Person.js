import React, {useState} from 'react';

export default function Person(props) {
    const [name, setName] = useState(props.name);

    var updateName = ()=>{
        setName('Anything');
        // set state is lazy func
        alert(name);
        //India
    }
      return (
    <div>
    <h4>Name:{name}  Email:{props.email} </h4>
    <button onClick={updateName} >update Name</button>
    </div>
  );
}



// export  function ANother() {
//   return (
//     <div>
//     <h4>Name: ANother</h4>
//     </div>
//   );
// }


// import React,{useState,useEffect} from 'react';
// var apiCustomer = 'http://localhost:4000/api/customer';
//    function AddCustomer(props) {
//       const [name, setName] = useState('');
//       const [email, setEmail] = useState('');
//       const [phone, setPhone] = useState('');
//       const [address, setAddress] = useState('');
//       var handleChange = (e) =>{
//          if(e.target.name === "email"){
//             setEmail(e.target.value);
//          }else if(e.target.name === "name"){
//             setName(e.target.value);
//          }else if(e.target.name === "address"){
//             setAddress(e.target.value);
//          }else if(e.target.name === "phone"){
//             setPhone(e.target.value);
//          }
//       }
//       var addCustomer=()=>{
//          fetch(apiCustomer,{
//             method: 'post',
//             body:JSON.stringify({
//                name:name,email:email,phone:phone,address:address
//             }),
//             headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//             }
//          }) .then(function(result){
//                props.history.push('/customer');
//             }) 
//       }
//       return (
//          <div>
//             <h2>Add Customer</h2>
//             <input name="name" onChange={handleChange} placeholder="name" value={name}/><br/><br/>
//             <input name="email" onChange={handleChange} placeholder="email" value={email}/><br/><br/>
//             <input name="address" onChange={handleChange} placeholder="address" value={address}/><br/><br/>
//             <input name="phone" onChange={handleChange} placeholder="phone" value={phone}/><br/><br/>
//             <button onClick={addCustomer}>Submit</button>
//          </div>
//       );
//    }
//     export default AddCustomer;
