console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log("The form's data: ", formData);

  event.target.reset();

  event.target.elements.firstName.focus();
});
