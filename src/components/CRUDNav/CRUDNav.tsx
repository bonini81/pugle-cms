import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import "../../scss/NavPortfolio.scss";
import Button from "../Boton";

interface CRUDNavProps {
  handleClickAddItem?: () => void;
  handleClickDeleteItem?: () => void;
  handleClickEditItem?: () => void;
  contextName: string;
}

const CRUDNav = ({
  handleClickAddItem,
  handleClickDeleteItem,
  handleClickEditItem,
  contextName,
}: CRUDNavProps) => {
  return (
    <nav>
      <ul className="ul-item-styles">
        <li>
          <AddCircleIcon className="mui-icons-align__portfolio" />
          <Button
            data-testid="portfolio-item-btn"
            variant="text"
            onClick={handleClickAddItem}
            className={{
              root: "portfolio-btn-styles",
            }}
          >
            Add {contextName} Item
          </Button>
        </li>
        <li>
          <DeleteForeverIcon className="mui-icons-align__portfolio" />
          <Button
            data-testid="portfolio-item-btn"
            variant="text"
            onClick={handleClickDeleteItem}
            className={{
              root: "portfolio-btn-delete-styles",
            }}
          >
            Delete {contextName} Item
          </Button>
        </li>
        <li>
          <EditIcon className="mui-icons-align__portfolio" />
          <Button
            data-testid="portfolio-item-btn"
            variant="text"
            onClick={handleClickEditItem}
            className={{
              root: "portfolio-btn-edit-styles",
            }}
          >
            Edit {contextName} Item
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default CRUDNav;
