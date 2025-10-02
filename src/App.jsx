import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all"); // all | active | completed

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setList([...list, { text: inputValue, checked: false }]);
      setInputValue("");
    }
  };

  const toggleChecked = (index) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  const filteredList = list.filter((item) => {
    if (filter === "active") return !item.checked;
    if (filter === "completed") return item.checked;
    return true; // all
  });

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>add</button>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredList.map((item, index) => (
          <li
            key={index}
            style={{ textDecoration: item.checked ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleChecked(list.indexOf(item))}
            />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
