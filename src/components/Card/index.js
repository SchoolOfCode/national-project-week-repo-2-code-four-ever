import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const Card = ({ weeknumber, daynumber, dayname }) => {
  // console.log("WEEK NO", weeknumber);
  // console.log("DAY NO", daynumber);
  let navigate = useNavigate();
 

  function handleClick() {
    navigate("/cardviewer", { state: { wn: weeknumber, dn: daynumber } });
  }

  return (
    <div id="card-id">
      <h2>{dayname}</h2>
      <h3>Day {(weeknumber - 1) * 5 + daynumber}</h3>
      <Button action={handleClick} text="Open" />
    </div>
  );
};

export default Card;
