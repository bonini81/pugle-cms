import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import "../../scss/PortfolioBackOffice.scss";
import Button from "../../components/Boton";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">Portfolio CRUD Page</h2>
      <p>Page to Manage Portfolio Page</p>
      <ul className="ul-item-styles">
        <li>
          <AddCircleIcon className="mui-icons-align__portfolio" />
          <Button
            data-testid="portfolio-item-btn"
            variant="text"
            onClick={() => navigate("/backoffice/portfolio-additem")}
            className={{
              root: "portfolio-btn-styles",
            }}
          >
            Add Portfolio Item
          </Button>
        </li>
        <li>
          <DeleteForeverIcon className="mui-icons-align__portfolio" />
          <Button
            data-testid="portfolio-item-btn"
            variant="text"
            onClick={() => navigate("/backoffice/portfolio-delete-item")}
            className={{
              root: "portfolio-btn-delete-styles",
            }}
          >
            Delete Portfolio Item
          </Button>
        </li>
        <li>
          <EditIcon className="mui-icons-align__portfolio" />
          <Button
            data-testid="portfolio-item-btn"
            variant="text"
            onClick={() => navigate("/backoffice/portfolio-edit-item")}
            className={{
              root: "portfolio-btn-edit-styles",
            }}
          >
            Edit Portfolio Item
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
