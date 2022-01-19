import React, { useState, useEffect } from "react";
import "./Day.css";

function Day(props) {
  const data = [
    { dayName: "Day1", title: "react", description: "useState" },
    {
      dayName: "Day2",
      title: "javascript",
      description: "map, reduce, filter",
    },
  ];

  // const [info, setInfo] = useState([]);
  const [mockdata, setMockData] = useState(data);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch("url");
      const data = await response.json();
      setMockData(data);
    }
    fetchInfo();
  }, []);

  if (!props.show) {
    return null;
  }

  function handleClick() {
    setShow(true);
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={props.onClose}>
            x
          </button>
          <h2 className="modal-title">{props.dayName}</h2>
        </div>
        <div className="modal-body">
          <input className="modal-input-title" placeholder="Title" />
          <input className="modal-input" placeholder="Description" />
        </div>

        <div className="modal-footer">
          <button className="modal-button">Add</button>
          <button className="modal-button">Update</button>
          <button className="modal-button">Delete</button>
          <button className="modal-button">Read</button>
        </div>
        <div className="info">
          {mockdata.map((item) => {
            return (
              <div>
                <h3> title={item.title} </h3>
                <p>desc={item.description}</p>
                <h2> dayName={item.dayName}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Day;
