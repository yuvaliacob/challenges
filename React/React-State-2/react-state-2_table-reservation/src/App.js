import { useState } from "react";
import React from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handlePeopleAdd() {
    setPeople(people + 1);
  }

  function handlePeopleSubtract() {
    if (people > 0) {
      setPeople(people - 1);
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onPeopleAdd={handlePeopleAdd}
        onPeopleSubtract={handlePeopleSubtract}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
