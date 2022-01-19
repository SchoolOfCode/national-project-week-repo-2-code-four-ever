import React from "react";
import "./Day.css";

function Day(props) {
  if (!props.show) {
    return null;
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
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Day;
