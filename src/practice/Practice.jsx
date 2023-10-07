import { useState } from "react";
import "./Style.css";

const Practice = () => {
  const [data, setData] = useState(["a", "b", "c", "d", "e"]);
  const [additem, setAddItem] = useState("");

  const deleteHandle = (index) => {
    const newData = data.filter((x, idx) => idx !== index);

    setData(newData);
  };

  const handleChange = (ev) => {
    setAddItem(ev.target.value);
  };

  return (
    <div className="data-container">
      {data.map((item, index) => (
        <div key={index} className="data-list">
          {item}{" "}
          <span
            className="xbtn"
            onClick={() => {
              deleteHandle(index);
            }}
          >
            x
          </span>
        </div>
      ))}
      {additem} <br />
      <br />
      <input type="text" name="text" value={additem} onChange={handleChange} />
      <button onClick={() => setData((prev) => [...prev, additem])}>Add</button>
    </div>
  );
};

export default Practice;
