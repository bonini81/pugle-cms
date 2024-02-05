/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const dataStorUsers = useSelector((state: any) => state.users);
  const dataStoreTokens = useSelector((state: any) => state.tokens);
  const tokenLocalStorage = localStorage.getItem("token");

  useEffect(() => {
    if (
      dataStorUsers.currentUser === null ||
      tokenLocalStorage !== dataStoreTokens.currentToken ||
      tokenLocalStorage === null
    ) {
      navigate("/login");
    }
  }, [
    dataStoreTokens.currentToken,
    dataStorUsers.currentUser,
    tokenLocalStorage,
    navigate,
  ]);

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
                  <li className="list-item-decoration">About Me</li>
                  <li className="list-item-decoration">Services</li>
                  <li className="list-item-decoration">Portfolio</li>
                </ul>
              </div>
            </aside>
          </Grid>
          <Grid item xs={12} sm={6} md={8} className="grid-item-padding">
            <section className="section-wrrapper-styles">
              <h2 className="titleh-h2-padding">Pugle CMS Homepage</h2>
              <p>
                Pugle CMS is a Content Management System for my sidebusiness.{" "}
              </p>
            </section>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Main;
