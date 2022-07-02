import React from "react";
import "./Modal.css";
import { useState } from "react";

export default function ({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Hawler");
  const eventHandler = (e) => {
    setTitle(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const rest = () => {
    setDate("");
    setTitle("");
    setLocation("Hawler");
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 1200),
    };
    addEvent(event);
    rest();
    console.log(event);
  };

  return (
    <div className="con-modal conatiner container-sm">
      <h1 className="title-form">Add new event</h1>
      <form onSubmit={sumbitHandler} className="form">
        <input
          onChange={eventHandler}
          placeholder="event name"
          type={"text"}
          value={title}
          className="input"
        ></input>

        <input
          onChange={dateHandler}
          placeholder="date"
          className="input"
          type={"date"}
        ></input>

        <select onChange={locationHandler} className="input" value={location}>
          <option>Hawler</option>
          <option>Duhok</option>
          <option>Sulimani</option>
        </select>

        <button type={"submit"} className="btn btn-primary">
          Sumbit
        </button>
      </form>
    </div>
  );
}
