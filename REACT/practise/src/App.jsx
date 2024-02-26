import { useState } from "react";

import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [color, setcolor] = useState(false);

  function clickhandler() {
    setcount(count + 1);
  }

  function setcolors() {
    setcolor(!color);
  }

  function decreasehandler() {
    setcount(count - 1);
  }

  return (
    <>
      <h1>states in react</h1>
      <h3>count={count}</h3>
      <h3 style={{color:color?"red":"blue"}}>this is color components</h3>
      <button onClick={clickhandler}>increase</button>
      <button onClick={decreasehandler}>decrease</button>
      <button onClick={setcolors}>click</button>
    </>
  );
}

export default App;
