import React from "react";
import "./Day.css";

function Day({ onClick }) {
  return (
    <div>
      <h4 className="week">Week 1</h4>
      <div className="day-div" onClick={onClick}>
        Day 1
      </div>
      <div className="day-div" onClick={onClick}>
        Day 2
      </div>
      <div className="day-div" onClick={onClick}>
        Day 3
      </div>
      <div className="day-div" onClick={onClick}>
        Day 4
      </div>
      <div className="day-div" onClick={onClick}>
        Day 5
      </div>
    </div>
  );
}

export default Day;
