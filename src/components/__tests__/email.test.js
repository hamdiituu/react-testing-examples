import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Email from "../email";

beforeEach(() => {
  render(<Email />);
});

test("test email component initial value is empty", () => {
  const inputEl = screen.getByLabelText(/email/i);
  expect(inputEl).toHaveValue("");
});

test("test input change", () => {
  const inputEl = screen.getByLabelText(/email/i);
  const testString = "Lorem ipsum sit amet";
  userEvent.type(inputEl, testString);
  expect(inputEl).toHaveValue(testString);
});
