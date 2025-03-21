import { add } from "./stringCalculator";

test("returns sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles newline as delimiter along with comma", () => {
  expect(add("1\n2,3")).toBe(6);
});
