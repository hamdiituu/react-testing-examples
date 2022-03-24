import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "../checkbox";

beforeEach(() => {
  render(<Checkbox />);
});

test("checkbox initially not be checked", () => {
  const checkboxEl = screen.getByRole("checkbox");
  expect(checkboxEl).not.toBeChecked();
});

test("checkbox click not be checked", () => {
  const checkboxEl = screen.getByRole("checkbox");
  userEvent.click(checkboxEl);
  expect(checkboxEl).toBeChecked();
});
