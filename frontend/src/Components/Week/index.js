import React, { useState } from "react";
import "./Week.css";
import Day from "../Day/index";

function Week({ onClick, weekNumber }) {
  const [days, setDays] = useState([1, 2, 3, 4, 5]);
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }
  return (
    <div>
      <h2 className="week">{weekNumber}</h2>
      {days.map((item) => {
        return (
          <div className="day-div" onClick={handleClick}>
            <Day onClose={() => setShow(false)} show={show} />
          </div>
        );
      })}
    </div>
  );
}

export default Week;
