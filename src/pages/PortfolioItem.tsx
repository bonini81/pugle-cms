import { useNavigate, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "../scss/PortfolioItem.scss";
import Buttton from "../components/Boton";
import Title from "../components/Title";
import portfolioContent from "../data/portfolioInfo.json";

const PortfolioItem = (): JSX.Element => {
  const navigate = useNavigate();

  const { id } = useParams();
  const portfolioItemId = Number(id);

  const portfolioItems = portfolioContent.find(
    (item) => item.key === portfolioItemId
  );

  return (
    <section className="section-grid-item-margins">
      <Title
        titleServices={portfolioItems?.title || "Portafolio"}
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
              src={portfolioItems?.img}
              alt={portfolioItems?.alt}
              width="100%"
              height="auto"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <h3 className="h3-title-align">
              Categoría: {portfolioItems?.category}
            </h3>
            <p className="paragraph-description-styles">
              {portfolioItems?.description}
            </p>
            <p className="paragraph-link-styles">
              <strong>Web:</strong>{" "}
              <a href={portfolioItems?.linkTo} target="_blank" rel="noreferrer">
                {portfolioItems?.title}
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
