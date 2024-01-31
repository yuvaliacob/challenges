import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./App.css";

const App = () => {
  const [listItems, setListItems] = useState([
    { id: "1", content: "1. Drag me drop me" },
    { id: "2", content: "2. Drag me drop me" },
    { id: "3", content: "3. Drag me drop me" },
    { id: "4", content: "4. Drag me drop me" },
    { id: "5", content: "5. Drag me drop me" },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = Array.from(listItems);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setListItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {listItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            <div className="placeholder">{provided.placeholder}</div>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
