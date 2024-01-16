import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2} valueB={3} />;
}

function Sum({ valueA, valueB }) {
  const total = valueA + valueB;
  return <h1>{`${valueA}+${valueB}=${total}`}</h1>;
}
