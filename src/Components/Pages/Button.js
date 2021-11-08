import React from "react";
import "./Button.css";
function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
}
export default Button;
