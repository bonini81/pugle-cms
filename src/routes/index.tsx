import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayOut from "../components/LayOut";
import LayOutBackOffice from "../components/LayOutBackOffice";
import BackOfficeMain from "../pages/backOffice/Main";
import PortfolioBackOffice from "../pages/backOffice/Portfolio";
import PortfolioAddItem from "../pages/backOffice/PortfolioAddItem";
import PortfolioDeleteItem from "../pages/backOffice/PortfolioDeleteItem";
import PortfolioEditItem from "../pages/backOffice/PortfolioEditItem";
import UserBackOffice from "../pages/backOffice/User";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Portfolio from "../pages/Portfolio";
import PortfolioItem from "../pages/PortfolioItem";
import PrivateRoutes from "../utils/PrivateRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/portafolioItem/:key" element={<PortfolioItem />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<LayOutBackOffice />}>
            <Route path="backoffice/user" element={<UserBackOffice />} />
            <Route
              path="backoffice/portfolio"
              element={<PortfolioBackOffice />}
            />
            <Route
              path="backoffice/portfolio-additem"
              element={<PortfolioAddItem />}
            />
            <Route
              path="backoffice/portfolio-delete-item"
              element={<PortfolioDeleteItem />}
            />
            <Route
              path="backoffice/portfolio-edit-item"
              element={<PortfolioEditItem />}
            />
            <Route path="backoffice/home" element={<BackOfficeMain />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
