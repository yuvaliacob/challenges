console.clear();

// `while` loop

let number = 0;
let count = 0;

// --v-- write/change code here --v--

while (number <= 0.9) {
  console.log(number);
  number = Math.random();
  count++;
}

// --^-- write/change code here --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
