import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  // In the App component, write a handleAddTag function which receives one parameter, e.g. newTag.
  function handleAddTag(newTag) {
    // console.log(newTag);
    // Call the state setter function and add the new tag to the current state.
    setTags([...tags, newTag]);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} />
    </main>
  );
}
