import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Ouch! Don't do that!");
  }

  return (
    <Button
      color="red"
      disabled={false}
      text="CLICK ME"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button onClick={onClick} style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
