console.clear();

// Radius of a circle
let circleRadius = 5;

// Calculation: Circle area
let circleArea = Math.PI * Math.pow(circleRadius, 2);

let fewerDecimalsArea = parseFloat(circleArea).toFixed(2);

// Calculation: Circle circumference
let circumference = 2 * Math.PI * circleRadius;

let fewerDecimalsCircumference = parseFloat(circumference).toFixed(2);

console.log(
  "For a circle with a radius of",
  circleRadius,
  "units:",

  "\n\n",
  "-   The area is approximately",
  fewerDecimalsArea,
  "square units.",
  "\n",
  "-   The circumference is approximately",
  fewerDecimalsCircumference,
  "units."
);
