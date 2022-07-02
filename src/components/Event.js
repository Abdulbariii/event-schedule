import React from "react";
import "./Event.css";

export default function Event(props) {
  return (
    <div className="con container-lg container-md  container-sm">
      <h1>{props.event}</h1>
      <p>{props.date}</p>
      <p>{props.location}</p>
      <button className="btn btn-danger" onClick={props.deleteHandler}>
        Delete
      </button>
    </div>
  );
}
