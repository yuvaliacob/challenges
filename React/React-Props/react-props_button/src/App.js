import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="red" disabled={false} text="CLICK ME" />;
}

function Button({ color, disabled, text }) {
  return (
    <button
      onClick={() => console.log("Ouch! Don't do that!")}
      style={{ color: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
