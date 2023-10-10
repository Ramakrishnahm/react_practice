import { useState, useEffect } from "react";

// import Data from "./Data";
import axios from "axios";
import "./Styles.css";

const Data = ({input}) => {
  const [data, setData] = useState([]);
  const[isActive,setIsActive] = useState(true)
 

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
      {data.map((item, index) => (
        <div className="list-items" key={index}>
          {item.title}
          {item.complete}
          <div className="list-buttons">
            <input
              type="checkbox"
              value = {isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />  {isActive ? "Show" :"Hide"}

            <button type="button">Edit </button>
            <button type="button" onClick={() => deleteTodo(item.id)}>
              Delete{" "}
            </button>
          </div>
        </div>
      ))}
       <Todo  input = {input}/>
    </div>
  );
};
const Todo = () => {
  const [input, setInput] = useState("");
  const [searchText,setSearchText] = useState("")
  const[data,setData] = useState([])

  function filterData(searchText, data) {
    const filterData = data.filter((item) =>
      item.title.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }

  return (
    <div>
      <h3>Todo List</h3>

      <input
        type="text"
        name="text"
        value={searchText}
        placeholder="Enter Todo Item"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-btn"
       onClick={() => {
       ta
        const filterTextData = filterData(searchText, data);
       
        setData(filterTextData);
      }}
      >Search</button>
     
       <Data />
    </div>
  );
};

export default Todo;