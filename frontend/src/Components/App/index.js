import React from "react";
import "./App.css";
import { useState } from "react";
import Modal from "../Modal/index";
import Day from "../Day/index";
function App() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(true);
  }
  return (
    <div className="App">
      <h2>Resource Tracker</h2>
      <Day onClick={handleClick} />
      <Day onClick={handleClick} />
      <Day onClick={handleClick} />

      <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
