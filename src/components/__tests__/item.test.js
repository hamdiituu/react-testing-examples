import { screen, render } from "@testing-library/react";
import Item from "../item";

const testTitle = "Makale Başlığı";
const testDescription = "Makale içeriğidir.";

beforeEach(() => {
  render(<Item title={testTitle} description={testDescription} />);
});

test("item component have in title test", () => {
  const titleEl = screen.getByTestId("titleTestId");
  expect(titleEl).toBeInTheDocument();
  expect(titleEl).toHaveTextContent(testTitle.substring(0, 5));
});

test("item component have in description test", () => {
  const titleEl = screen.getByTestId("descTestId");
  expect(titleEl).toBeInTheDocument();
  expect(titleEl).toHaveTextContent(testDescription);
});

test("item component have in div class card", () => {
  const cardEl = screen.getByTestId("cardTestId");
  expect(cardEl).toBeInTheDocument();
  expect(cardEl).toHaveClass("card");
});
