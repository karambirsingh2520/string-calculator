import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculatorComponent from "../components/StringCalculatorComponent";

test("calculates valid input", () => {
  render(<StringCalculatorComponent />);
  fireEvent.change(screen.getByPlaceholderText(/e\.g\./), {
    target: { value: "1,2" },
  });
  fireEvent.click(screen.getByText(/calculate/i));
  expect(screen.getByText(/Result: 3/)).toBeInTheDocument();
});

test("shows error on negative numbers", () => {
  render(<StringCalculatorComponent />);
  fireEvent.change(screen.getByPlaceholderText(/e\.g\./), {
    target: { value: "1,-2" },
  });
  fireEvent.click(screen.getByText(/calculate/i));
  expect(screen.getByText(/negative numbers not allowed/)).toBeInTheDocument();
});
