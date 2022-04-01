import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ text, time, reminder, clicked }) => {
  return (
    <div className={`task ${reminder ? "reminder" : " "}`}>
      <h3>
        {text} <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>{time}</p>
    </div>
  );
};

export default Task;
