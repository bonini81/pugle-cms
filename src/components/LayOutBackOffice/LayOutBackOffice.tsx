import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "../../scss/LayoutBackOffice.scss";
import logo from "../../assets/header/freelance-desarrolloweb-seo.jpg";
import footerText from "../../data/footerLinks.json";
import menuLinksArrayBackOffice from "../../data/menuLinksBackOffice.json";
import Button from "../Boton";
import Footer from "../Footer";
import Header from "../Header";

const handleLogout = () => {
  localStorage.removeItem("token");
  // Next step clear Redux Store
};

const { copyright } = footerText;
const headerProps = {
  logo: {
    src: logo,
    alt: "Freelance Front End Developer",
    width: 170,
    height: 90,
  },
  menuLinks: menuLinksArrayBackOffice,
  onClick: handleLogout,
};

const LayOutBackOffice = (): JSX.Element => {
  const dataStorUsers = useSelector((state: any) => state.users);
  const navigate = useNavigate();

  return (
    <>
      <Header {...headerProps} />
      <main className="main-wrapper-styles">
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={6} md={4} className="grid-item-padding">
              <aside className="aside-navbar-styles">
                <div className="aside-navbar-styles__user">
                  <p>
                    <SpeedIcon className="mui-icons-align" /> Pugle BackOffice
                    Dashboard
                  </p>
                  <p>
                    Hola, <Person2Icon className="mui-icons-align" />{" "}
                    {dataStorUsers.currentUser}
                  </p>
                </div>
                <div className="aside-navbar-styles__menu">
                  <h3 className="htitle-style-margin">
                    <StorageIcon
                      className="icon-db-margin"
                      style={{ fontSize: "1.7rem" }}
                    />
                    Database Contexts
                  </h3>
                  <ul className="main-list-margin">
                    <li className="list-item-decoration">
                      {" "}
                      <Button
                        onClick={() => navigate("/backoffice/home")}
                        variant="text"
                        data-testid="testPortfolio"
                        className={{ root: "button-text-styles" }}
                      >
                        Home
                      </Button>
                    </li>
                    <li className="list-item-decoration">
                      <Button
                        variant="text"
                        data-testid="testPortfolio"
                        className={{ root: "button-text-styles" }}
                      >
                        About Me
                      </Button>
                    </li>
                    <li className="list-item-decoration">
                      <Button
                        variant="text"
                        data-testid="testPortfolio"
                        className={{ root: "button-text-styles" }}
                      >
                        Services
                      </Button>
                    </li>
                    <li className="list-item-decoration">
                      <Button
                        onClick={() => navigate("/backoffice/portfolio")}
                        variant="text"
                        data-testid="testPortfolio"
                        disableRipple
                        disableFocusRipple
                        disableElevation
                      >
                        Portfolio
                      </Button>
                    </li>
                    <li className="list-item-decoration">
                      <Button
                        onClick={() => navigate("/backoffice/user")}
                        variant="text"
                        data-testid="testPortfolio"
                        disableRipple
                        disableFocusRipple
                        disableElevation
                      >
                        Usuarios
                      </Button>
                    </li>
                  </ul>
                </div>
              </aside>
            </Grid>
            <Grid item xs={12} sm={6} md={8} className="grid-item-padding">
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer mainFooter={false} copyright={copyright} />
    </>
  );
};

export default LayOutBackOffice;
