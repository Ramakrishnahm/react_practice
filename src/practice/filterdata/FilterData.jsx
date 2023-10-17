// import "./styles.css";
import { useState } from "react";

export default function FilterData() {
  const productsData = [
    {
      id: "p10j11k",
      title: "Wireless Ergonomic Mouse",
      completed: true
    },
    {
      id: "p12l13m",
      title: "Portable Power Bank",
      completed: true
    },
    {
      id: "p14n15o",
      title: "Smartphone Stand Holder",
      completed: false
    },
    {
      id: "p16q17r",
      title: "Waterproof Backpack",
      completed: false
    },
    {
      id: "p18s19t",
      title: "Noise-Cancelling Headphones",
      completed: true
    },
    {
      id: "p20u21v",
      title: "USB 3.0 Hub",
      completed: true
    }
  ];
  const [users, setUsers] = useState(productsData);

  const handleCompleted = () => {
    const complete = users.filter((user) => user.completed)
    setUsers(complete)
    
  }

  const handleunCompleted = () => {
    const uncomplete = users.filter((user) => !user.completed)
    setUsers(uncomplete)
    
  }

  const handleCorrect = () => {
    setUsers(users)
  }

  

  return (
    <div className="App">
      {" "}
      <br />
      <button onClick = {handleCompleted}>completed</button> <br /> <br />
      <button onClick = {handleunCompleted}>unCompleted</button> <br /> <br />
      <button onClick =  {handleCorrect}>All</button>

{users.map(({id,title}) => (
  <div key = {id}> 
  <h3>{title}</h3>

  </div>
))}
    </div>
  );
}
