import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import EditIcon from "@mui/icons-material/Edit";
import * as yup from "yup";

import Button from "../../components/Boton";
import TextField from "../../components/CoTextField";
import CRUDNav from "../../components/CRUDNav";
import Modal from "../../components/Modal";
import { PortfolioItem } from "../../interfaces/backend/portfolio";
import portfolioService from "../../services/portfolio.service";

const PortfolioEditItem = () => {
  const navigate = useNavigate();
  const [portfolioContentData, setPortfolioContentData] = useState<
    PortfolioItem[] | null
  >(null);
  const [portfolioContentItem, setPortfolioContentItem] =
    useState<PortfolioItem | null>(null);
  const [editPortfolioContent, setEditPortfolioContent] =
    useState<boolean>(true);
  const [editPortfolioContentItem, setEditPortfolioContentItem] =
    useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [descriptionModal, setDescriptionModal] = useState<string>("");

  const schema = yup.object().shape({
    key: yup.number().required("La key del portafolio es requerida."),
    category: yup.string().required("La categoria es requerida."),
    title: yup.string().required("El título es requerido."),
    alt: yup.string().required("El texto alt en la imagen es requerido."),
    description: yup.string().required("La descripcion es requerida."),
    linkTo: yup.string().required("El enlace hacia es requerida."),
    linkToText: yup.string().required("El texto del enlace es requerido."),
    hrefTo: yup.string().required("El enlace hacia es requerida."),
    img: yup.string().required("El enlace hacia es requerida."),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<PortfolioItem>({
    resolver: yupResolver(schema),
  });

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

  const onSubmitEdit = async (data: any) => {
    const userDataPatch = {
      img: data.img,
      alt: data.alt,
      title: data.title,
      category: data.category,
      description: data.description,
      linkTo: data.linkTo,
      linkToText: data.linkToText,
      hrefTo: data.hrefTo,
      key: data.key,
    };
    portfolioUpdate(userDataPatch.key, userDataPatch);
  };

  const portfolioUpdate = async (key: string, userDataPatch: PortfolioItem) => {
    try {
      await portfolioService.patchPortfolioContentByKey(key, userDataPatch);
      setDescriptionModal("Portfolio updated successfully");
      setShowModal(true);
    } catch (err: any) {
      setDescriptionModal("Portfolio update failed");
      setShowModal(true);
    }
  };

  const getPortfolioItem = async (key: string) => {
    setEditPortfolioContent(false);
    try {
      const response = await portfolioService.getPortfolioContentByTitle(key);
      const portfolioItem = await response.data;
      setPortfolioContentItem(null);
      setPortfolioContentItem(portfolioItem);
      setEditPortfolioContentItem(true);
    } catch (err: any) {
      setDescriptionModal("Portfolio Item Not Found");
      setShowModal(true);
    }
  };

  const handleClickEditOtherItem = () => {
    setEditPortfolioContentItem(false);
    reset();
    setEditPortfolioContent(true);
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

      {editPortfolioContent ? (
        <article>
          <ul className="menu-ul-item-styles">
            {portfolioContentData &&
              portfolioContentData.map((item, index) => (
                <li key={index}>
                  {item.title}
                  <Button
                    variant="text"
                    data-testid="button-delete"
                    onClick={() => getPortfolioItem(String(item.key))}
                    className={{
                      root: "portfolio-delete-btn-styles",
                    }}
                  >
                    <EditIcon className="mui-icons-align__portfolio" />
                  </Button>
                </li>
              ))}
          </ul>
        </article>
      ) : (
        ""
      )}
      {editPortfolioContentItem ? (
        <form
          onSubmit={handleSubmit(onSubmitEdit)}
          data-testid="portfolio-form"
          className="open-portfolio-styles"
        >
          <div className="portfolio-field-styles">
            <Controller
              name="key"
              control={control}
              defaultValue={portfolioContentItem?.key}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-key"
                  className="portfolio-field-styles"
                  label="Portfolio Key"
                  variant="outlined"
                  {...register("key")}
                  {...field}
                  ref={null}
                  error={!!errors.key}
                  helperText={errors.key ? errors.key?.message : ""}
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="title"
              control={control}
              defaultValue={portfolioContentItem?.title}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-title"
                  className="portfolio-field-styles"
                  label="Portfolio Category Title"
                  variant="outlined"
                  {...register("title")}
                  {...field}
                  ref={null}
                  error={!!errors.title}
                  helperText={errors.title ? errors.title?.message : ""}
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="description"
              control={control}
              defaultValue={portfolioContentItem?.description}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-description"
                  label="Portfolio Description"
                  variant="outlined"
                  multiline
                  rows={3}
                  {...register("description")}
                  {...field}
                  ref={null}
                  error={!!errors.description}
                  helperText={
                    errors.description ? errors.description?.message : ""
                  }
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="alt"
              control={control}
              defaultValue={portfolioContentItem?.alt}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-category"
                  className="portfolio-field-styles"
                  label="Image Alt Text"
                  variant="outlined"
                  {...register("alt")}
                  {...field}
                  ref={null}
                  error={!!errors.alt}
                  helperText={errors.alt ? errors.alt?.message : ""}
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="category"
              control={control}
              defaultValue={portfolioContentItem?.category}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-category"
                  className="portfolio-field-styles"
                  label="Portfolio Category Title"
                  variant="outlined"
                  {...register("category")}
                  {...field}
                  ref={null}
                  error={!!errors.category}
                  helperText={errors.category ? errors.category?.message : ""}
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="img"
              control={control}
              defaultValue={portfolioContentItem?.img}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-category"
                  className="portfolio-field-styles"
                  variant="outlined"
                  label="Portfolio Image URL"
                  // type="file"
                  {...register("img")}
                  {...field}
                  ref={null}
                  error={!!errors.img}
                  helperText={errors.img ? errors.img?.message : ""}
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="linkTo"
              control={control}
              defaultValue={portfolioContentItem?.linkTo}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-linkto"
                  className="portfolio-field-styles"
                  variant="outlined"
                  {...register("linkTo")}
                  {...field}
                  ref={null}
                  label="Portfolio Link to Project"
                  error={!!errors.linkTo}
                  helperText={errors.linkTo ? errors.linkTo?.message : ""}
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="linkToText"
              control={control}
              defaultValue={portfolioContentItem?.linkToText}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-linkto"
                  className="portfolio-field-styles"
                  variant="outlined"
                  {...register("linkToText")}
                  {...field}
                  ref={null}
                  label="Portfolio Link Text"
                  error={!!errors.linkToText}
                  helperText={
                    errors.linkToText ? errors.linkToText?.message : ""
                  }
                />
              )}
            />
          </div>
          <div className="portfolio-field-styles">
            <Controller
              name="hrefTo"
              control={control}
              defaultValue={portfolioContentItem?.hrefTo}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-linkto"
                  className="portfolio-field-styles"
                  variant="outlined"
                  {...register("hrefTo")}
                  {...field}
                  ref={null}
                  label="Portfolio Item Page Link"
                  error={!!errors.hrefTo}
                  helperText={errors.hrefTo ? errors.hrefTo?.message : ""}
                />
              )}
            />
          </div>
          <div className="button-form-styles">
            <Button
              variant="contained"
              data-testid="login"
              type="submit"
              value="Login"
            >
              Actualizar
            </Button>
          </div>
          <Button
            variant="text"
            data-testid="login"
            value="Login"
            onClick={handleClickEditOtherItem}
          >
            Editar Otro Item
          </Button>
        </form>
      ) : (
        ""
      )}
      <DevTool control={control} />
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

export default PortfolioEditItem;
