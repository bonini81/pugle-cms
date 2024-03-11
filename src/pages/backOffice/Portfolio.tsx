import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as yup from "yup";

import "../../scss/PortfolioBackOffice.scss";
import Button from "../../components/Boton";
import TextField from "../../components/CoTextField";
import { PortfolioItem } from "../../interfaces/backend/portfolio";
import portfolioService from "../../services/portfolio.service";

const Portfolio = () => {
  const [openPortfolio, setOpenPortfolio] = useState<boolean>(false);
  const [openDeletePortfolio, setOpenDeletePortfolio] =
    useState<boolean>(false);
  const [portfolioContentData, setPortfolioContentData] = useState<
    PortfolioItem[] | null
  >(null);
  const [portfolioContentItem, setPortfolioContentItem] =
    useState<PortfolioItem | null>(null);
  const [editPortfolioContent, setEditPortfolioContent] =
    useState<boolean>(false);
  const [editPortfolioContentItem, setEditPortfolioContentItem] =
    useState<boolean>(false);

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
    control,
    formState: { errors },
  } = useForm<PortfolioItem>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    /** const formData = new FormData();

    formData.append("image", data.image);
    formData.append("alt", data.alt);
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("linkTo", data.linkTo);
    formData.append("linkToText", data.linkToText);
    formData.append("hrefTo", data.hrefTo); */

    const userData = {
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

    // console.log("userData: ");
    // console.log(userData);

    await portfolioUpload(userData);
  };

  const portfolioUpload = async (userData: PortfolioItem) => {
    // const portfolioUpload = async (formData: any) => {
    try {
      await portfolioService.postPortfolioContent(userData);
      alert("Portfolio uploaded successfully");
    } catch (err: any) {
      alert("Portfolio upload failed");
    }
  };

  const handlePortfolioClick = () => {
    if (!openPortfolio) {
      setOpenPortfolio(true);
      setOpenDeletePortfolio(false);
      setEditPortfolioContent(false);
    } else {
      setOpenPortfolio(false);
    }
  };

  const handleDeletePortfolioClick = () => {
    if (!openDeletePortfolio) {
      setOpenDeletePortfolio(true);
      setOpenPortfolio(false);
      setEditPortfolioContent(false);
      getPortfolioContentApi();
    } else {
      setOpenDeletePortfolio(false);
    }
  };

  const handleEditPortfolioClick = () => {
    if (!editPortfolioContent) {
      setEditPortfolioContent(true);
      setOpenDeletePortfolio(false);
      setOpenPortfolio(false);
      getPortfolioContentApi();
    } else {
      setEditPortfolioContent(false);
    }
  };

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

  const getPortfolioItem = async (key: string) => {
    setEditPortfolioContent(false);
    try {
      const response = await portfolioService.getPortfolioContentByTitle(key);
      const portfolioItem = await response.data;
      setPortfolioContentItem(portfolioItem);
      setEditPortfolioContentItem(true);
      console.log("portfolioItem");
      console.log(portfolioContentItem?.category);
    } catch (err: any) {
      console.log(err);
      alert("Portfolio Item Not Found");
    }
  };

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
            onClick={() => handlePortfolioClick()}
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
            onClick={() => handleDeletePortfolioClick()}
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
            onClick={() => handleEditPortfolioClick()}
            className={{
              root: "portfolio-btn-edit-styles",
            }}
          >
            Edit Portfolio Item
          </Button>
        </li>
      </ul>
      {openPortfolio ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-testid="portfolio-form"
          className="open-portfolio-styles"
        >
          <div className="portfolio-field-styles">
            <Controller
              name="key"
              control={control}
              render={({ field }) => (
                <TextField
                  data-testid="portfolio-key"
                  className="portfolio-field-styles"
                  label="Portfolio Key"
                  variant="outlined"
                  {...register("title")}
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
              Enviar
            </Button>
          </div>
        </form>
      ) : (
        ""
      )}
      {openDeletePortfolio ? (
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
      ) : (
        ""
      )}

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
          onSubmit={handleSubmit(onSubmit)}
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
                  {...register("title")}
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
              Enviar
            </Button>
          </div>
        </form>
      ) : (
        ""
      )}
    </section>
  );
};

export default Portfolio;
