import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

// Add tests
test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});
