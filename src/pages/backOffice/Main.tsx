import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "../../scss/BackOfficeHome.scss";

const Main = (): JSX.Element => {
  return (
    <main className="main-wrapper-styles">
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <aside className="aside-navbar-styles">Hola, XXXX</aside>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <section className="section-wrrapper-styles">
              <div>Main</div>
            </section>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Main;
