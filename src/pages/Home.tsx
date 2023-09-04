import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CodeIcon from "@mui/icons-material/Code";

import "../scss/Home.scss";
import logo from "../assets/header/freelance-desarrolloweb-seo.jpg";
import Buttton from "../components/Boton";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import footerText from "../data/footerLinks.json";
import heroText from "../data/heroText.json";

const Home = (): JSX.Element => {
  const { copyright } = footerText;
  const { subtitle1, subtitle2, title1 } = heroText.titleInfo;
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
      <Hero
        subtitle1={subtitle1}
        title1={title1}
        subtitle2={subtitle2}
        data-testid="homeHero"
      />
      <div className="cards-space-above">
        <Cards
          graphic={<CodeIcon fontSize="large" />}
          cardTitle="ReactJS Developer"
          cardContent="fsdfsadfsd sfsdfsdfsadfadsf"
          data-testid="homeCard"
          colorVariant="primary"
        />
      </div>
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
