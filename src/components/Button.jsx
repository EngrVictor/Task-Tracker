import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      style={{ backgroundColor: color, color: "white" }}
      className="btn btn"
    >
      {text}
    </button>
  );
};

export default Button;
