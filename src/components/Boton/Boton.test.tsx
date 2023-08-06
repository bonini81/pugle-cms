import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Boton";

const buttonText = "Andy";

const onClick = jest.fn();

test("Childen Boton Text works", () => {
  render(
    <Button data-testid="testBoton" variant="contained">
      {buttonText}
    </Button>
  );
  expect(screen.getByText("Andy")).toBeInTheDocument();
});

test("Onclick Working or Button is Clickable per se", () => {
  render(
    <Button onClick={onClick} data-testid="testBoton2" variant="contained">
      Test
    </Button>
  );
  const element = screen.getByTestId("testBoton2");
  fireEvent.click(element);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("Disabled feature is working well", () => {
  render(
    <Button
      onClick={onClick}
      disabled
      data-testid="testBoton3"
      variant="contained"
    >
      Test
    </Button>
  );
  expect(screen.getByTestId("testBoton3")).toHaveAttribute("disabled");
  expect(screen.getByTestId("testBoton3")).toBeDisabled();
});
