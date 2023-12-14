console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);

  console.log(numberA + numberB);

  result.textContent = add();

  // event.target.reset();

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
