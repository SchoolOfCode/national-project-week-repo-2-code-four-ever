import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Day from "../Day/index";
import Week from "../Week/index";

function App() {
  const data = [
    { dayName: "Day1", title: "react", description: "useState" },
    {
      dayName: "Day2",
      title: "javascript",
      description: "map, reduce, filter",
    },
  ];
  const [show, setShow] = useState(false);

  const [info, setInfo] = useState([]);
  const [mockdata, setMockData] = useState(data);

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch("url");
      const data = await response.json();
      setInfo(data);
    }
    fetchInfo();
  }, []);

  function handleClick() {
    setShow(true);
  }

  return (
    <div className="App">
      <h2>Resource Tracker</h2>
      {mockdata.map(function (item) {
        return (
          <Day
            onClose={() => setShow(false)}
            show={show}
            title={item.title}
            desc={item.description}
            dayName={item.dayName}
          />
        );
      })}
      <Week onClick={handleClick} />

      {/* <Day onClose={() => setShow(false)} show={show} /> */}

      {/* <Day onClick={handleClick} />
      <Day onClick={handleClick} />
      <Day onClick={handleClick} /> */}
    </div>
  );
}

export default App;
