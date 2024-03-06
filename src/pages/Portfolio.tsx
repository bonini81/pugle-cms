import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import "../scss/Portfolio.scss";
import Cards from "../components/Cards";
import Title from "../components/Title";
import { PortfolioItem } from "../interfaces/backend/portfolio";
import portfolioService from "../services/portfolio.service";

const Portfolio = () => {
  interface PortfolioArray {
    portfolioContent: PortfolioItem[];
  }

  const [portfolioData, setPortfolioContent] =
    useState<PortfolioArray | null>();

  useEffect(() => {
    getPortfolioContentApi();
  }, []);

  const getPortfolioContentApi = async () => {
    try {
      const response = await portfolioService.getPortfolioContent();
      const portfolioItems = await response.data;
      setPortfolioContent(portfolioItems);
    } catch (err: any) {
      alert("Portfolio content not found!");
    }
  };

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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {portfolioData &&
            portfolioData.portfolioContent.map((portfolio, index) => (
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

export default Portfolio;
