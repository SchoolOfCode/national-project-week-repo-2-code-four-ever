import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const Card = ({ weeknumber, daynumber }) => {
  // console.log("WEEK NO", weeknumber);
  // console.log("DAY NO", daynumber);
  let navigate = useNavigate();

  function handleClick() {
    navigate("/cardviewer", { state: { wn: weeknumber, dn: daynumber } });
  }
  return (
    <div id="card-id">
      <h2>Day 1</h2>
      <Button action={handleClick} text="Open" />
    </div>
  );
};

export default Card;
