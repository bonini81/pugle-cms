import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Button from "../../components/Boton";
import { PortfolioItem } from "../../interfaces/backend/portfolio";
import portfolioService from "../../services/portfolio.service";

const PortfolioDeleteItem = () => {
  const [portfolioContentData, setPortfolioContentData] = useState<
    PortfolioItem[] | null
  >(null);

  useEffect(() => {
    getPortfolioContentApi();
  }, []);

  const navigate = useNavigate();

  const getPortfolioContentApi = async () => {
    try {
      const response = await portfolioService.getPortfolioContent();
      const portfolioItems = await response.data.portfolioContent;
      setPortfolioContentData(portfolioItems);
    } catch (err: any) {
      console.log(err);
    }
  };
  const deletePortfolioItem = async (key: string) => {
    try {
      await portfolioService.deletePortfolioContentByKey(key);
      alert("Portfolio Item Deleted");
      const response = await portfolioService.getPortfolioContent();
      const portfolioItems = await response.data.portfolioContent;
      setPortfolioContentData(portfolioItems);
    } catch (err: any) {
      console.log(err);
    }
  };

 // const getPortfolioItem = async (key: string) => {
    //  setEditPortfolioContent(false);
   // try {
     // const response = await portfolioService.getPortfolioContentByTitle(key);
     // const portfolioItem = await response.data;
      // setPortfolioContentItem(null);
      //  setPortfolioContentItem(portfolioItem);
      // setEditPortfolioContentItem(true);
  //  } catch (err: any) {
    //  alert("Portfolio Item Not Found");
   // }
  // };

  // console.log("portfolioContentItem:");
  // console.log(portfolioContentItem);

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
      <article>
        <ul className="menu-ul-item-styles">
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
        </ul>
      </article>
    </section>
  );
};
export default PortfolioDeleteItem;
