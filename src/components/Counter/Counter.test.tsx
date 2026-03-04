import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test('renders a count of 10 after clicking the set button with amount 10', async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test('elements are focused in the right order', async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

/**
 * ! NOTES: Convenience APIs -> Call Pointer APIs internally
 * - user.click(element)
 * - user.dblClick(element)
 * - user.tripleClick(element)
 * - user.hover(element)
 * - user.unhover(element)
 */

/**
 * ! NOTES: Pointer APIs:
 * - pointer({ keys: '[MouseLeft]' })
 * - pointer({ keys: '[MouseLeft][MouseRight]' })
 * - pointer('[MouseLeft][MouseRight]') -> If keys is the only argument
 * - pointer('[MouseLeft>]') -> Holding down the left mouse button
 * - pointer('[/MouseLeft]') -> Release the left mouse button
 */

/**
 * ! NOTES: Utility APIs:
 * * type()
 * * clear():
 *    await user.clear(screen.getByRole("textbox"));
 *    expect(screen.getByRole("textbox")).toHaveValue("");
 * * selectOptions():
 *    await user.selectOptions(screen.getByRole("listbox"), ["Option 1", "Option 2"]);
 *    expect(screen.getByRole("option", { name: "Option 1" }).selected).toBe(true);
 *    expect(screen.getByRole("option", { name: "Option 2" }).selected).toBe(true);
 *    expect(screen.getByRole("option", { name: "Option 3" }).selected).toBe(false);
 * * upload():
 *    const file = new File(['hello]', 'hello.png', { type: 'image/png' });
 *    const input = screen.getByLabelText(/select a file/i) as HTMLInputElement;
 *    await user.upload(input, file);
 *    expect(input.files[0]).toBe(file);
 *    expect(input.files.item(0)).toBe(file);
 *    expect(input.files.length).toBe(1);
 */

/**
 * ! NOTES: Convenience APIs:
 * - tab()
 */

/**
 * ! NOTES: Clipboard APIs:
 * copy()
 * cut()
 * paste()
 */

/**
 * ! NOTES: Keyboard APIs:
 * - keyboard('foo') -> f, o, o
 * - keyboard('{Shift>}A{/Shift}') -> Shift(down), A, Shift(up)
 */