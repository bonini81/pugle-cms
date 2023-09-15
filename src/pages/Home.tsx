import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CodeIcon from "@mui/icons-material/Code";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Grid from "@mui/material/Grid";

import "../scss/Home.scss";
import logo from "../assets/header/freelance-desarrolloweb-seo.jpg";
import Buttton from "../components/Boton";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import footerText from "../data/footerLinks.json";
import heroText from "../data/heroText.json";
import servicesContent from "../data/servicesContent.json";

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

  const getIconNameCards = (name: number) => {
    switch (name) {
      case 0:
        return <PsychologyIcon style={{ fontSize: "3rem" }} />;
      case 1:
        return <ImportantDevicesIcon style={{ fontSize: "3rem" }} />;
      case 2:
        return <LocalGroceryStoreIcon style={{ fontSize: "3rem" }} />;
      case 3:
        return <CodeIcon style={{ fontSize: "3rem" }} />;
      default:
        return "";
    }
  };

  <CodeIcon style={{ fontSize: "3rem" }} />;

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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {servicesContent.map((services) => (
            <Grid item xs={4} sm={2} md={3}>
              <Cards
                graphic={getIconNameCards(services.icons)}
                cardTitle={services.title}
                cardContent={services.description}
                data-testid="homeCard"
                colorVariant="primary"
              />
            </Grid>
          ))}
        </Grid>
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
