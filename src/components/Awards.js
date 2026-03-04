import { useState, useRef } from "react";

import ComingSoon from "./comingsoon";
import TaskManager from "../components/TaskManager/TaskManager";
const  Awards = () => {

  const [number, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prev => (prev < 15 ? prev + 1 : 15)); // usring ternary operator
  }
  const decreaseCount = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));  // using ternary operator
  }

  // useRef example

  const [ name, setName] = useState("Sukanta");
  const [color, setColor] = useState("gray");
 
  const refelement = useRef("");
  console.log(refelement);
  
  const Reset = () => {
    setName("");
    refelement.current.focus();
  }
  const changeColor = () => {
    refelement.current.style.color = "green";
    refelement.current.value = "Puja";
    // refelement.current.style.color = name === "" ? "green" : "red";
    setColor(prev => (prev === "blue" ? "red" : "blue"));
  }

  return (
    <>
      <ComingSoon />
      <TaskManager />

      <div className="container">
        <h1 style={{color: "black"}}>Counter {number}</h1>
        <button onClick={increaseCount}>
          Increase
        </button>
        <button onClick={decreaseCount}>
          Decrease
        </button>

        <h1 style={{color: "black", marginTop: "50px"}}>{name}</h1>
        <input style={{color: "black", fontSize: "15px", display: "flex", marginBottom: "50px", color}} 
        type="text" ref={refelement} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={Reset}>Reset</button>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </>
  );
}

export default Awards;