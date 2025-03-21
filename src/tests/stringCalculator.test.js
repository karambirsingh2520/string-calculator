import { add } from "../utils/stringCalculator";

test("returns sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles newline as delimiter along with comma", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("handles custom delimiter like //;\n1;2", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws error if negative numbers are present", () => {
  expect(() => add("1,-2,3,-5")).toThrow(
    "negative numbers not allowed: -2, -5"
  );
});

test("supports custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws error on negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow(
    "negative numbers not allowed: -2, -4"
  );
});
