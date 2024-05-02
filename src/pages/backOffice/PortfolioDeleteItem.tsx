import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Button from "../../components/Boton";
import CRUDNav from "../../components/CRUDNav";
import Modal from "../../components/Modal";
import { PortfolioItem } from "../../interfaces/backend/portfolio";
import portfolioService from "../../services/portfolio.service";

const PortfolioDeleteItem = () => {
  const navigate = useNavigate();
  const [portfolioContentData, setPortfolioContentData] = useState<
    PortfolioItem[] | null
  >(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [descriptionModal, setDescriptionModal] = useState<string>("");

  useEffect(() => {
    getPortfolioContentApi();
  }, []);

  const getPortfolioContentApi = async () => {
    try {
      const response = await portfolioService.getPortfolioContent();
      const portfolioItems = await response.data.portfolioContent;
      setPortfolioContentData(portfolioItems);
    } catch (err: any) {
      setDescriptionModal("There was an error while fetching portfolio data");
      setShowModal(true);
    }
  };
  const deletePortfolioItem = async (key: string) => {
    try {
      await portfolioService.deletePortfolioContentByKey(key);
      setDescriptionModal("Portfolio deleted successfully");
      setShowModal(true);
      const response = await portfolioService.getPortfolioContent();
      const portfolioItems = await response.data.portfolioContent;
      setPortfolioContentData(portfolioItems);
    } catch (err: any) {
      setDescriptionModal("Portfolio not deleted successfully");
      setShowModal(true);
    }
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

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
      <article>
        <ol className="menu-ul-item-styles">
          {portfolioContentData &&
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
            ))}
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
export default PortfolioDeleteItem;
