import { render, screen } from "@testing-library/react";

// eslint-disable-next-line no-restricted-imports
import logo from "../../assets/header/freelance-desarrolloweb-seo.jpg";
import Header from "./Header";

const headerProps = {
  logo: {
    src: logo,
    alt: "Freelance Front End Developer",
    width: 170,
    height: 90,
  },
};
// Test case: Header Logo has the correct alt copy
test("Alt Copy in Header Logo", () => {
  render(<Header {...headerProps} />);
  expect(
    screen.getByAltText("Freelance Front End Developer")
  ).toBeInTheDocument();
});

// export {};
