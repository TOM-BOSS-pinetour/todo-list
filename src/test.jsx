import { useState } from "react";

function Task({ index, item }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} />
      <div
        style={{ textDecoration: isChecked ? "line-through" : "" }}
        key={index}
      >
        {item}
      </div>
    </div>
  );
}

export default Task;
