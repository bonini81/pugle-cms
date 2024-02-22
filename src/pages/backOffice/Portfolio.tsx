import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../scss/PortfolioBackOffice.scss";
import Button from "../../components/Boton";
import TextField from "../../components/CoTextField";
import { PortfolioItem } from "../../interfaces/backend/portfolio";
import portfolioService from "../../services/portfolio.service";

const Portfolio = () => {
  const schema = yup.object().shape({
    category: yup.string().required("La categoria es requerida."),
    title: yup.string().required("El título es requerido."),
    alt: yup.string().required("El texto alt en la imagen es requerido."),
    description: yup.string().required("La descripcion es requerida."),
    linkTo: yup.string().required("El enlace hacia es requerida."),
    linkToText: yup.string().required("El texto del enlace es requerido."),
    hrefTo: yup.string().required("El enlace hacia es requerida."),
   // image: yup.string().required("El enlace hacia es requerida."),
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
    // event.preventDefault();

  
   /* const data2 = {
      image: formData.get("image"),
      alt: formData.get("alt"),
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      linkTo: formData.get("linkTo"),
      linkToText: formData.get("linkToText"),
      hrefTo: formData.get(" hrefTo"),
    }; 
 const userData = {
      image: data.image,
      alt: data.alt,
      title: data.title,
      category: data.category,
      description: data.description,
      linkTo: data.linkTo,
      linkToText: data.linkToText,
      hrefTo: data.hrefTo,
  }
/*
      formData.append("image", data.image);
    formData.append("alt", data.alt);
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("linkTo", data.linkTo);
    formData.append("linkToText", data.linkToText);
    formData.append("hrefTo", data.hrefTo);
    }; */

    const formData = new FormData();
   
    formData.append("image", data.image);
    formData.append("alt", data.alt);
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("linkTo", data.linkTo);
    formData.append("linkToText", data.linkToText);
    formData.append("hrefTo", data.hrefTo);

    console.log("formData: ");
    console.log(formData);

    const userData = {
      image: data.image,
      alt: data.alt,
      title: data.title,
      category: data.category,
      description: data.description,
      linkTo: data.linkTo,
      linkToText: data.linkToText,
      hrefTo: data.hrefTo,
    };

    console.log("userData: ");
    console.log(userData);

    await portfolioUpload(formData);
  };

  // const portfolioUpload = async ( userData: PortfolioItem) => {
  const portfolioUpload = async (formData: any) => {
    try {
      await portfolioService.postPortfolioContent(formData);
      alert("Portfolio uploaded successfully");
    } catch (err: any) {
      alert("Portfolio upload failed");
    }
  };

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">Portfolio Upload Page</h2>
      <p>Page to Upload Portfolio Content</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="portfolio-field-styles">
          <Controller
            name="title"
            control={control}
            defaultValue="Portfolio Category Title"
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
            defaultValue="Portfolio Description"
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
            defaultValue="Image Alt Text"
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
            defaultValue="Portfolio Category Title"
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
            name="image"
            control={control}
            render={({ field }) => (
              <TextField
                data-testid="portfolio-category"
                className="portfolio-field-styles"
                variant="outlined"
                type="file"
                {...register("image")}
                {...field}
                ref={null}
                // error={!!errors.image}
              // helperText={errors.image ? errors.image?.message : ""}
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
                helperText={errors.linkToText ? errors.linkToText?.message : ""}
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
    </section>
  );
};

export default Portfolio;
