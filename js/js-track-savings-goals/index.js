console.clear();

// Initial savings balance
let startingBalance = 1000;

// Montly savings
let monthlyContribution = 100;

// Duration in months
let months = 12;

// Calculation of total savings
const totalSavings = startingBalance + monthlyContribution * months;

const euroSymbol = "€";

console.log(
  "After",
  months,
  "months of saving, you will have",
  euroSymbol + totalSavings,
  "in your account."
);
