console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  // Generate new <li></li> element
  const newToastEntry = document.createElement("li");

  // Insert text into new element: <li>"I am a new entry."</li>
  newToastEntry.textContent = "I am a new entry.";

  // Insert CSS class into <li> element: <li class="toast-container__message">
  newToastEntry.classList.add("toast-container__message");

  // <li class="toast-container__message">I'm a toast message.</li> has now been created inside the DOM.

  // Place newly generated element into the DOM by appending it to the previosuly created toastContainer variable, which is connected to the <ol> element via querySelector
  toastContainer.append(newToastEntry);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages

  // Clear all HTML content inside the <ol> element (stored in the variable toastContainer as is referenced above) by setting its content to an empty string
  toastContainer.innerHTML = "";
});
