import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

const copyright = "Copyright Pugle.net 2023";

test("Render correct Contact Data", () => {
  render(<Footer copyright={copyright} />);
  expect(screen.getByText("0969078192")).toBeInTheDocument();
  expect(screen.getByText("info@pugle.net")).toBeInTheDocument();
});

test("Should render with Copyright Text", () => {
  render(<Footer copyright={copyright} />);
  expect(screen.getByText("Copyright Pugle.net 2023")).toBeInTheDocument();
});
