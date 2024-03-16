import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import "../../scss/NavPortfolio.scss";
import Button from "../Boton";

const NavPortfolio = () => {
  const navigate = useNavigate();

  return (
    <nav>
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
    </nav>
  );
};

export default NavPortfolio;
