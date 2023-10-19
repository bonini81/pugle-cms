import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayOut from "../components/LayOut";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
