import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import "../scss/Portfolio.scss";
import Cards from "../components/Cards";
import Title from "../components/Title";
import portfolioInfo from "../data/portfolioInfo.json";

const StaticPortfolio = () => {
  const navigate = useNavigate();

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
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {portfolioInfo.map((portfolio, index) => (
            <Grid item xs={12} sm={4} md={3}>
              <Cards
                key={index}
                img={portfolio.img}
                cardTitle={portfolio.title}
                data-testid="portfolioCard"
                colorVariant="primary"
                chip
                cardCategory={portfolio.category}
                cta
                onClick={() => navigate(`/portafolioItem/${portfolio.key}`)}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default StaticPortfolio;
