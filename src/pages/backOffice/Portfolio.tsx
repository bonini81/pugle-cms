import { useNavigate } from "react-router-dom";

import "../../scss/PortfolioBackOffice.scss";
import CRUDNav from "../../components/CRUDNav";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">Portfolio CRUD Page</h2>
      <p>Page to Manage Portfolio Page</p>
      <CRUDNav
        contextName="Portfolio"
        handleClickAddItem={() => navigate("/backoffice/portfolio-additem")}
        handleClickEditItem={() => navigate("/backoffice/portfolio-edit-item")}
        handleClickDeleteItem={() =>
          navigate("/backoffice/portfolio-delete-item")
        }
      />
    </section>
  );
};

export default Portfolio;
