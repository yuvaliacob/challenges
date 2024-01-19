import "./styles.css";
import { useState } from "react";

export default function App() {
  return <>
    <Counter />
    <Counter />
  </>
}

function Counter() {
  const [counter, setCounter] = useState(0)
  console.log(counter);
  //  const stateArray = useState(0)
  //  const counter = stateArray[0]
  //  const setCounter = stateArray[1]

  // let counter = 0;
  // console.log('counter component executed');
  return <button onClick={() => { setCounter(counter + 1); }}>You have clicked this button {counter} times</button>;
}
