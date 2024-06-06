import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import CRUDNav from "../../../components/CRUDNav";
import Modal from "../../../components/Modal";

const UserDelete = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [descriptionModal, setDescriptionModal] = useState<string>("");

  const navigate = useNavigate();
  const modalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">User DELETE</h2>
      <p>Page to Delete Users</p>
      <CRUDNav
        contextName="Portfolio"
        handleClickAddItem={() => navigate("/backoffice/portfolio-additem")}
        handleClickEditItem={() => navigate("/backoffice/portfolio-edit-item")}
        handleClickDeleteItem={() =>
          navigate("/backoffice/portfolio-delete-item")
        }
      />
      <article>
        <ol className="menu-ul-item-styles">
          {/**  {portfolioContentData &&
          portfolioContentData.map((item, index) => (
            <li key={index}>
              {item.title}
              <Button
                variant="text"
                data-testid="button-delete"
                onClick={() => deletePortfolioItem(String(item.key))}
                className={{
                  root: "portfolio-delete-btn-styles",
                }}
              >
                <HighlightOffIcon className="mui-icons-align__portfolio" />
              </Button>
            </li>
          ))} */}
        </ol>
      </article>
      <Modal
        title="Portfolio Upload Status"
        description={descriptionModal}
        button="Close"
        show={showModal}
        handleClose={modalCloseHandler}
      />
    </section>
  );
};

export default UserDelete;
