/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">Pugle CMS Homepage</h2>
      <p>Pugle CMS is a Content Management System for my sidebusiness.</p>
    </section>
  );
};

export default Main;
