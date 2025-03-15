import { useState } from "react";
import "./Container.css";
export default function Container() {
  const[color, setColor] =useState("");
  const handleColor = ()=>{
    setColor("");
  }
  return (
    <>
      <div className="all-container">
        <div className="input-container">
        <input
          type="text"
          className="form-control mb-3 mt-4 me-4 ms-4 search-input"
          placeholder="Search tasks..."
        />
        </div>
       <div className="buttons-container ms-4 mt-2">
       <button type="button" className="btn btn-primary buttons">
          All
        </button>
        <button type="button" className="btn btn-primary buttons ms-3">
          Today
        </button>
        <button type="button" className="btn btn-primary buttons ms-3">
          Upcoming
        </button>
        <button type="button" className="btn btn-primary buttons ms-3">
          Completed
        </button>
       </div>
        
      </div>
        
    </>
  );
}
