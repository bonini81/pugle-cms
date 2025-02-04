import { Outlet } from "react-router-dom";

import logo from "../../assets/header/freelance-desarrolloweb-seo.png";
import footerText from "../../data/footerLinks.json";
import menuLinksArray from "../../data/menuLinks.json";
import Footer from "../Footer";
import Header from "../Header";

const { copyright } = footerText;
const headerProps = {
  logo: {
    src: logo,
    alt: "Freelance Front End Developer",
    width: 170,
    height: 90,
  },
  menuLinks: menuLinksArray,
};
const LayOut = (): JSX.Element => {
  return (
    <>
      <Header {...headerProps} />
      <Outlet />
      <Footer mainFooter={false} copyright={copyright} />
    </>
  );
};

export default LayOut;
