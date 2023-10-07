
import { useState } from "react";
import Data from "./Data";
import 'App.css'

const Main = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h3>Todo List</h3>

      <input
        type="text"
        name="text"
        value={input}
        placeholder="Enter Todo Item"
        onChange={(e) => setInput(e.target.value)}
      />
      <button>ADD ITEM</button>
      <Data />
    </div>
  );
};

export default Main;
