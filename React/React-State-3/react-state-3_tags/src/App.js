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

  // In the App component, write a handleDeleteTag function which receives one parameter, e.g. tagToDelete.
  function handleDeleteTag(tagToDelete) {
    // console.log(tagToDelete);
    // Call the state setter function and remove the tag from the current state.
    const filtered = tags.filter((tags) => tags !== tagToDelete);
    setTags(filtered);
  }

  return (
    <main className="app">
      {/* Pass handleAddTag to the Form component using the correct prop name. */}
      <Form onAddTag={handleAddTag} />
      {/* Pass handleDeleteTag to the List component using the correct prop name. */}
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
