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
