import React from "react";
import "./Modal.css";

function Modal(props) {
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
          <h2 className="modal-title">Day1</h2>
        </div>
        <div className="modal-body">
          <input className="modal-input" text="insert" />
        </div>
        <div className="modal-footer">
          <button className="modal-button">Insert</button>
          <button className="modal-button">Update</button>
          <button className="modal-button">Delete</button>
          <button className="modal-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
