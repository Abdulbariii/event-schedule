import "./App.css";
import Title from "./components/Title";
import Event from "./components/Event";
import { useState } from "react";
import Btn from "./components/Btn";
import Modal from "./components/Modal";

function App() {
  const [events, setEvents] = useState([]);
  const [hide, setHide] = useState(true);
  const [add, setAdd] = useState(false);

  const addEvent = (event) => {
    setEvents((prevEvenet) => {
      return [...prevEvenet, event];
    });
    setAdd(false);
  };

  const hideHandler = () => {
    setHide(false);
  };
  const showHandler = () => {
    setHide(true);
  };

  const deleteHandler = (id) => {
    setEvents((events) => {
      return events.filter((events) => {
        return events.id !== id;
      });
    });
  };

  const addHandler = () => {
    setAdd(true);
  };

  return (
    <div className="App container-md container-sm">
      <Title></Title>
      <Btn hideHandler={hideHandler} showHandler={showHandler}></Btn>

      {hide &&
        events.map((e) => (
          <Event
            deleteHandler={() => {
              deleteHandler(e.id);
            }}
            event={e.title}
            location={e.location}
            date={e.date}
          ></Event>
        ))}
      <button onClick={addHandler} className="btn btn-add btn-primary">
        Add event
      </button>
      {add && <Modal addEvent={addEvent}></Modal>}
    </div>
  );
}

export default App;
