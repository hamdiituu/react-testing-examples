import { screen, render, cleanup } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log("before all");
});

beforeEach(() => {
  console.log("before each");
  render(<App />);
});

afterAll(() => {});

afterEach(() => {
  cleanup(); // domu temizler ama gerek yok!
});

test("Header renders corrently", () => {
  // render(<App />); // render App
  const headerEl = screen.getByText(/developer/i); // selector
  expect(headerEl).toBeInTheDocument(); //not
  expect(headerEl).toHaveTextContent("Developer");
});

test("Green text render correctly", () => {
  // render(<App />); // render App
  const greenEl = screen.getByText(/yeşil yazı./i);
  expect(greenEl).toBeInTheDocument(); //dokumanda mı?
  expect(greenEl).toHaveTextContent("Yeşil yazı.");
  expect(greenEl).toHaveClass("green");
});

test("button test", () => {
  // render(<App />); // render App
  // const buttonEl = screen.getByRole("button"); // selector
  // expect(buttonEl).toBeInTheDocument();
  // expect(buttonEl).toHaveTextContent("Click");
});

test("lorem test", () => {
  // render(<App />); // render App
  const loremTextEl = screen.getByTestId("loremText"); //selector
  expect(loremTextEl).toBeInTheDocument(); // domda var mı ?
  expect(loremTextEl).toHaveTextContent("Lorem ipsum"); // içeriğini sorguladık
  expect(loremTextEl).toHaveClass("headerText"); //style- class soruguladık
});
