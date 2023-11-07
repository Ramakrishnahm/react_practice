import React from "react";
import "./style.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

function SectionComponent({ header, rows }) {
  return (
    <div className="container">
      {header.map((headerItem, headerIndex) => (
        <div key={headerIndex} className="headerIndex">
          <h3>{headerItem.title} </h3>
          <p>{headerItem.subtitle}</p>
        </div>
      ))}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="rowIndex">
          <h3>{row.title}</h3>
          <div className="check">
            {row.item1 ? <AiFillCheckCircle style={{color:"green"}}/>:<AiFillCloseCircle style={{color:"red"}}/>}
            {row.item2 ? <AiFillCheckCircle style={{color:"green"}}/>:<AiFillCloseCircle style={{color:"red"}}/>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionComponent;
