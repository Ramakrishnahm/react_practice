
import React, { useState } from "react";
import "./styles.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function App() {
  const [data, setData] = useState({ like: 0, dislike: 0 });

  const handleButtonClick = (action) => {
    if (action === "like") {
      setData((prev) => ({
        ...prev,
        like: prev.like + 1
      }));
    } else if (action === "dislike") {
      setData((prev) => ({
        ...prev,
        dislike: prev.dislike - 1
      }));
    }
  };

  return (
    <div className="App">
      {data.like}
      <button onClick={() => handleButtonClick("like")} className="btn1">
        <AiFillLike />
      </button>{" "}
      {data.dislike}
      <button onClick={() => handleButtonClick("dislike")} className="btn2">
        <AiFillDislike />{" "}
      </button>
    </div>
  );
}