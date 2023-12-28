import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayOut from "../components/LayOut";
import LayOutBackOffice from "../components/LayOutBackOffice";
import BackOfficeMain from "../pages/backOffice/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Portfolio from "../pages/Portfolio";
import PortfolioItem from "../pages/PortfolioItem";
import PrivateRoutes from "../utils/PrivateRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/portafolioItem/:id" element={<PortfolioItem />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<LayOutBackOffice />}>
            <Route path="backoffice/home" element={<BackOfficeMain />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
