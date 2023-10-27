import Grid from "@mui/material/Grid";

import Cards from "../components/Cards";
import Title from "../components/Title";
import portfolioContent from "../data/portfolioInfo.json";

const Portfolio = () => {
  return (
    <>
      <Title
        titleServices="Fundillo de Elite"
        subtitleServices="Desarrollador Frontend"
        renderSubtitle
      />
      <section>
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
                cta
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Portfolio;
