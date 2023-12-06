import { Outlet } from "react-router-dom";

import logo from "../../assets/header/freelance-desarrolloweb-seo.jpg";
import footerText from "../../data/footerLinks.json";
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
};
const LayOutBackOffice = (): JSX.Element => {
  return (
    <>
      <Header {...headerProps} />
      
      {/** <Outlet /> */}

      <Footer mainFooter={false} copyright={copyright} />
    </>
  );
};

export default LayOutBackOffice;
