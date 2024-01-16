import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="red" disabled={false} text="Some text." />;
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
