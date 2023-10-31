import Grid from "@mui/material/Grid";

import "../scss/Portfolio.scss";
import Cards from "../components/Cards";
import Title from "../components/Title";
import portfolioContent from "../data/portfolioInfo.json";

const Portfolio = () => {
  return (
    <>
      <Title
        titleServices="Portafolio"
        subtitleServices="Msc. Andrés Domínguez Bonini"
        renderSubtitle
      />
      <section className="section-grid-margins">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {portfolioContent.map((portfolio) => (
            <Grid item xs={12} sm={4} md={3}>
              <Cards
                img={portfolio.img}
                cardTitle={portfolio.title}
                data-testid="homeCard"
                colorVariant="primary"
                chip
                cardCategory={portfolio.category}
                // cta
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Portfolio;
