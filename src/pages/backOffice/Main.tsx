import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "../../scss/BackOfficeHome.scss";

const Main = (): JSX.Element => {
  const navigate = useNavigate();
  const dataStore = useSelector((state: any) => state);
  const tokenLocalStorage = localStorage.getItem("token");

  useEffect(() => {
    if (
      dataStore.users.currentUser === null ||
      tokenLocalStorage !== dataStore.tokens.currentToken ||
      tokenLocalStorage === null
    ) {
      navigate("/login");
    }
  }, [dataStore, tokenLocalStorage, navigate]);

  return (
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
                  {dataStore.users.currentUser}
                </p>
              </div>
              <div className="aside-navbar-styles__menu">
                <h3 className="htitle-style-margin">
                  <StorageIcon /> 
                  Database Contexts
                </h3>
                <ul className="main-list-margin">
                  <li className="list-item-decoration">About Me</li>
                  <li className="list-item-decoration">Services</li>
                  <li className="list-item-decoration">Portfolio</li>
                </ul>
              </div>
            </aside>
          </Grid>
          <Grid item xs={12} sm={6} md={8} className="grid-item-padding">
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
