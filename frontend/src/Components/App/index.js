import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Day from "../Day/index";
import Week from "../Week/index";

function App() {
  const bootcampLength = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];

  return (
    <div className="App">
      <h1>Resource Tracker</h1>

      {bootcampLength.map((item) => {
        return (
          <div>
            <Week weekNumber={item} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
