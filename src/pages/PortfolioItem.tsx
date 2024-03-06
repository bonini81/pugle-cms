import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "../scss/PortfolioItem.scss";
import Buttton from "../components/Boton";
import Title from "../components/Title";
import portfolioService from "../services/portfolio.service";

const PortfolioItem = (): JSX.Element => {
  const navigate = useNavigate();

  interface PortfolioItemTypes {
    title: string;
    img: string;
    description: string;
    category: string;
    linkTo: string;
    alt: string;
    linkToText: string;
    hrefTo: string;
    key: string;
  }

  const [portfolioItem, setPortfolioItem] = useState<PortfolioItemTypes>();

  const { key } = useParams();
  const portfolioItemTitle = String(key);

  useEffect(() => {
    if (!portfolioItemTitle) {
      navigate("/");
    } else {
      getPortfolioItem(portfolioItemTitle);
    }
  }, [portfolioItemTitle, navigate]);

  const getPortfolioItem = async (titlePortfolio: string) => {
    const response = await portfolioService.getPortfolioContentByTitle(
      titlePortfolio
    );
    const portfolioItemData = await response.data;
    setPortfolioItem(portfolioItemData);
  };

  return (
    <section className="section-grid-item-margins">
      <Title
        titleServices={portfolioItem?.title || "Portafolio"}
        renderSubtitle
      />
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={9} md={9}>
            <img
              src={portfolioItem?.img}
              alt={portfolioItem?.alt}
              width="100%"
              height="auto"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <h3 className="h3-title-align">
              Categoría: {portfolioItem?.category}
            </h3>
            <p className="paragraph-description-styles">
              {portfolioItem?.description}
            </p>
            <p className="paragraph-link-styles">
              <strong>Web:</strong>{" "}
              <a href={portfolioItem?.linkTo} target="_blank" rel="noreferrer">
                {portfolioItem?.title}
              </a>
            </p>
            <div style={{ width: "100px" }}>
              <Buttton
                variant="contained"
                data-testid="homeButton"
                onClick={() => navigate("/portafolio")}
              >
                Regresar
              </Buttton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PortfolioItem;
