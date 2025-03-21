import { add } from "./stringCalculator";

test("returns the number itself when single number is given", () => {
  expect(add("5")).toBe(5);
});
