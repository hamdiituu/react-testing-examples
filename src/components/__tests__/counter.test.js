import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../counter";

beforeEach(() => {
  render(<Counter />);
});

test("Counter is initially should 0", () => {
  const counterEl = screen.getByTestId("counterCounterTestId");
  expect(counterEl).toHaveTextContent(0);
});

test("Counter counter up button works correctly", () => {
  const counterEl = screen.getByTestId("counterCounterTestId");
  expect(counterEl).toHaveTextContent(0);
  const counterUpButtonEl = screen.getByRole("button", { name: /count up/i });

  userEvent.click(counterUpButtonEl);
  expect(counterEl).toHaveTextContent(1);
});

test("Counter counter down button works correctly", () => {
  const counterEl = screen.getByTestId("counterCounterTestId");
  expect(counterEl).toHaveTextContent(0);
  const counterDownButtonEl = screen.getByRole("button", {
    name: /count down/i,
  });

  userEvent.click(counterDownButtonEl);
  expect(counterEl).toHaveTextContent(-1);
});
