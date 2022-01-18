import "./App.css";
import { useState } from "react";
import Modal from "../Modal/index";
import React from "react";
function App() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(true);
  }
  return (
    <div className="App">
      <h2>Hello world</h2>
      <button onClick={handleClick}>Get modal</button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
