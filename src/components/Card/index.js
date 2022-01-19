import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

const Card = ({weeknumber, daynumber }) => {
  // console.log("WEEK NO", weeknumber);
  // console.log("DAY NO", daynumber);
  let navigate = useNavigate();

  function handleClick(){
    navigate('/cardviewer', { state: { wn: weeknumber, dn: daynumber } })
  }
  return (
    <div id="card-id">
      <h2>Day 1</h2>
      <Button action={handleClick}/>
      {/* <Link to={"/cardviewer"} state={{ msg: 'bella ragazzi' }}>
        <Button />
      </Link> */}
    </div>
  );
};

export default Card;
