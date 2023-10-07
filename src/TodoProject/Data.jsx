import { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => setData(res.data));
  }, []);

  const deleteTodo = (id) => {
    const filterTodo = data.filter((x) => x.id !== id);
    setData(filterTodo);
  };

  return (
    <div>
      {data.map((item,index) => (
        <div className="list-items" key = {index}>
          {item.title}
          {item.complete}
          <div className="list-buttons">
           
            <input
              type="checkbox"
              onChange={(e) => setInput(e.target.checked)}
            />  
          
            <button type="button">Edit </button>
            <button type="button" onClick={() => deleteTodo(item.id)}>
              Delete{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
