/**
 * * NOTES: TDD - Test Driven Development:
 *  1. Write a test -> All tests are bound to fail initially
 *  2. Write the code to make the test pass
 *  3. Refactor the code
 */

/**
 * * NOTES: Code Coverage: Metric showing how much of the code is being tested
 *  - Statement coverage: How many statements in the code have been executed
 *  - Branch coverage: How many branches of the control structures (e.g. if statements) have been executed
 *  - Function coverage: How many defined functions have been called
 *  - Line coverage: How many lines of code have been executed
 */

/**
 * * NOTES: What to test?
 *  1. Test component renders
 *  2. Test component renders with props
 *  3. Test component renders in different states
 *  4. Test component reacts to events
 * * NOTES: What not to test?
 *  1. Implementation details -> Test behaviors
 *  2. Third party code
 *  3. Code that is not important from user's POV
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders a name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText(/hello john/i);
    expect(textElement).toBeInTheDocument();
  });
});
