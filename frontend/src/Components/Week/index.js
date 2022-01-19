import React from "react";
import "./Week.css";

function Week({ onClick }) {
  return (
    <div>
      <h3 className="week">week 1</h3>
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

export default Week;
