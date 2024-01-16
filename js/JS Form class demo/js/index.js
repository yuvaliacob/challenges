console.clear();
const MAX_CHARACTERS = 150;

const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="personal-message"]');

const characterLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

console.log("Form: ", form);
console.log("messageInput: ", messageInput);
console.log("characterLeftElement: ", characterLeftElement);

form.addEventListener("submit", (event) => {
  // Preventing the default behavior.
  event.preventDefault();

  console.log(
    "event targe elements firstName: ",
    event.target.elements.firstName.value
  );

  const formData = new FormData(event.target);
  console.log("formData: ", formData);

  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  //To reset the values of my inputs.
  event.target.reset();

  console.log("Press submit");
});

messageInput.addEventListener("input", (e) => {
  console.log("Press");
  console.log("What I type: ", e.target.value.length);
  characterLeftElement.textContent =
    MAX_CHARACTERS - parseInt(e.target.value.length);
});
