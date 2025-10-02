import { useState } from "react";
import "./App.css";
import Task from "./test";

function App() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  function handleAdd() {
    if (text.trim() === "") return;
    setArray([...array, text]);
    setText("");
  }

  return (
    <div className="card">
      To-Do List
      <div className="head">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter text"
        />
        <button className="addbutton" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div>
        {array.map((item, index) => (
          <Task key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
