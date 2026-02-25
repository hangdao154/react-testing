/**
 * TDD - Test Driven Development:
 * 1. Write a test -> All tests are bound to fail initially
 * 2. Write the code to make the test pass
 * 3. Refactor the code
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="John" />);
  const textElement = screen.getByText(/hello john/i);
  expect(textElement).toBeInTheDocument();
});
