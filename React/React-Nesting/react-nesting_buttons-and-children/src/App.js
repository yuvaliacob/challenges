import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <button>Text</button>
      <button>Text??</button>
      <button>Whooo</button>
      <button>Meow</button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
