console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const language of programmingLanguages) {
  const languageItem = document.createElement("li");
  languageItem.textContent = language;
  ol.append(languageItem);
}

// --^-- write/change code here --^--
