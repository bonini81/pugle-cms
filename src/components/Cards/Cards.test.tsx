import { fireEvent, render, screen } from "@testing-library/react";

import Cards from "./Cards";

const handleClick = jest.fn();

test("Render card title correctly", () => {
  render(
    <Cards
      cardTitle="Test Card Title"
      cardContent="Test Card Content"
      data-testid="testCard"
    />
  );
  expect(screen.getByText("Test Card Title")).toBeInTheDocument();
});

test("Render card content correctly", () => {
  render(
    <Cards
      cardTitle="Test Card Title"
      cardContent="Test Card Content"
      data-testid="testCard2"
    />
  );
  expect(screen.getByText("Test Card Content")).toBeInTheDocument();
});

test("Render graphic correctly", () => {
  const testGraphic = <div>Test Graphic</div>;
  render(
    <Cards
      graphic={testGraphic}
      cardTitle="Test Card Title"
      cardContent="Test Card Content"
      data-testid="testGraphic"
    />
  );
  expect(screen.getByTestId("testGraphic")).toBeInTheDocument();
});

test("CTA button to be clickable", async () => {
  render(
    <Cards
      cardTitle="Test Card Title"
      cardContent="Test Card Content"
      data-testid="testCard4"
      cta
      onClick={handleClick}
    />
  );

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
