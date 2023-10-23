import Grid from "@mui/material/Grid";

import Cards from "../components/Cards";
import Title from "../components/Title";
import servicesContent from "../data/servicesContent.json";

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
          {servicesContent.map((services) => (
            <Grid item xs={12} sm={4} md={3}>
              <Cards
                cardTitle={services.title}
                cardContent={services.description}
                data-testid="homeCard"
                colorVariant="primary"
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Portfolio;
