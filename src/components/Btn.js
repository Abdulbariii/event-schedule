import React from "react";
import "./Btn.css";

export default function (props) {
  return (
    <div className="con-btn container-sm">
      <button className="btn btn-danger" onClick={props.hideHandler}>
        Hide
      </button>
      <button className="btn btn-primary" onClick={props.showHandler}>
        Show
      </button>
    </div>
  );
}
