import React, { useState, useEffect } from "react";

function LifeCycleHooks() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("React");

  useEffect(() => {
    console.log("Wow useEffect");
  },[name]);

  const handleSum = () => {
    setCounter(counter + 1);
  };
  const handleInput = (e) =>{
    setName(e.target.value)
  }
  return (
    <div>
      {counter}
      <button onClick={handleSum}>Aumentar</button>
      <input onChange={handleInput}></input>
      <div>
      </div>
      {name}
    </div>
  );
}

export default LifeCycleHooks;
