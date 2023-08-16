import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import logo from "../assets/header/freelance-desarrolloweb-seo.jpg";
import Buttton from "../components/Boton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import footerText from "../data/footerLinks.json";

const Home = () => {
  const { copyright } = footerText;
  const headerProps = {
    logo: {
      src: logo,
      alt: "Freelance Front End Developer",
      width: 170,
      height: 90,
    },
  };
  return (
    <>
      <Header {...headerProps} />
      <Hero />
      <div style={{ display: "center", width: 200, margin: "25px" }}>
        <Buttton
          variant="contained"
          data-testid="homeButton"
          endIcon={<ArrowForwardIosIcon />}
        >
          Call to Action
        </Buttton>
      </div>
      <Footer copyright={copyright} />
    </>
  );
};

export default Home;
