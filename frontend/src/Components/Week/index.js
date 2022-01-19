import React, { useState } from "react";
import "./Week.css";

function Week({ onClick }) {
  const [days, setDays] = useState([1, 2, 3, 4, 5]);
  return (
    <div>
      {days.map(function (item) {
        return (
          <div className="day-div" onClick={onClick}>
            Day 1
          </div>
        );
      })}
    </div>
  );
  // return (
  //   <div>
  //     <h3 className="week">week 1</h3>
  //     <div className="day-div" onClick={onClick}>
  //       Day 1
  //     </div>
  //     <div className="day-div" onClick={onClick}>
  //       Day 2
  //     </div>
  //     <div className="day-div" onClick={onClick}>
  //       Day 3
  //     </div>
  //     <div className="day-div" onClick={onClick}>
  //       Day 4
  //     </div>
  //     <div className="day-div" onClick={onClick}>
  //       Day 5
  //     </div>
  //   </div>
  // );
}

export default Week;
