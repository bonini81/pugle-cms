import { render, screen } from "@testing-library/react";

import heroText from "../../data/heroText.json";
import Hero from "./Hero";

test("My name should always Render", () => {
  const { subtitle1, subtitle2, title1 } = heroText.titleInfo;
  render(
    <Hero
      subtitle1={subtitle1}
      title1={title1}
      subtitle2={subtitle2}
      data-testid="heroTest"
    />
  );
  expect(
    screen.getByText("Hola soy Msc. Andrés Domínguez Bonini")
  ).toBeInTheDocument();
});
