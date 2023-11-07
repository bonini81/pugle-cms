import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

import Title from "../components/Title";
import portfolioContent from "../data/portfolioInfo.json";

const PortfolioItem = (): JSX.Element => {
  const { id } = useParams();

  return (
    <>
      <Title titleServices="Portafolio Item" renderSubtitle />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={6} md={6}>
          {id}
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          Sexo Fundillo
        </Grid>
      </Grid>
    </>
  );
};

export default PortfolioItem;
