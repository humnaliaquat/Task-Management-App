import { useState } from "react";
import "./Container.css";
export default function Container() {
  const[color, setColor] =useState("");
  const toggleColor = ()=>{
    setColor("#2e3bf1");
  }
  return (
    <>
      <div className="all-container">
        <div className="input-container">
        <input
          type="text"
          className=" mb-3 mt-4 me-4 ms-4 ps-3 search-input"
          placeholder="Search tasks..."
        />
        </div>
       <div className="buttons-container ms-4 mt-2 w-90">
       <button style ={{backgroundColor:color, color: "white"}} className="btn  buttons w-90 " onClick = {toggleColor} type="button" >
          All
        </button>
        <button type="button" style ={{backgroundColor:color }}  className="btn  buttons ms-3 w-90">
          Today
        </button>
        <button type="button" className="btn  buttons ms-3 w-90">
          Upcoming
        </button>
        <button type="button" className="btn  buttons ms-3 w-90">
          Completed
        </button>
       </div>
        
      </div>
        
    </>
  );
}
