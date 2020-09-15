import React, { Component, useState } from "react";

//Functional Component
const Car = (props) => {
  //print value inside html => { <<variable>> }

  const [count, setCount] = useState(0);
  // const [state, setState] = useState( { items: [], text: "" })

  //destructuring - ES6
  const { model, manufacturer, year } = props;

  //"use"
  // cwm => useEffect
  // cwu => useEffect

  return (
    <div>
      <h1>Car Model: {model}</h1>
      <h4>Car Manufacturer: {manufacturer}</h4>
      <p>Purchase Year: {year}</p>
      <p>Count: {count}</p>
      <button onClick={() => { setCount(count + 1)}}> Increase Count</button>
    </div>
  );
};

export default Car;
