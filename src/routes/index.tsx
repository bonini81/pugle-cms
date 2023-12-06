import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayOut from "../components/LayOut";
import BackOfficeMain from "../pages/backOffice/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Portfolio from "../pages/Portfolio";
import PortfolioItem from "../pages/PortfolioItem";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/portafolioItem/:id" element={<PortfolioItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="backoffice/home" element={<BackOfficeMain />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
