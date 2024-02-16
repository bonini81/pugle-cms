import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../scss/PortfolioBackOffice.scss";
import TextField from "../../components/CoTextField";

const Portfolio = () => {
  interface PortfolioFormValues {
    category: string;
    image: string;
    title: string;
    alt: string;
    description: string;
    linkto: string;
    linkToText: string;
    hrefTo: string;
  }

  const schema = yup.object().shape({
    category: yup.string().required("La categoria es requerida."),
    image: yup.string().required("La imagen es requerida."),
    title: yup.string().required("El título es requerido."),
    alt: yup.string().required("El texto alt en la imagen es requerido."),
    description: yup.string().required("La descripcion es requerida."),
    linkto: yup.string().required("El enlace hacia es requerida."),
    linkToText: yup.string().required("El texto del enlace es requerido."),
    hrefTo: yup.string().required("El enlace hacia es requerida."),
  });

  const {
    register,
    // handleSubmit,
    control,
    formState: { errors },
  } = useForm<PortfolioFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: "",
      title: "",
      image: "",
      alt: "",
      description: "",
      linkto: "",
      linkToText: "",
      hrefTo: "",
    },
  });

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">Portfolio Upload Page</h2>
      <p>Page to Upload Portfolio Content</p>
      <form>
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

        <Controller
          name="description"
          control={control}
          defaultValue="Portfolio Description"
          render={({ field }) => (
            <TextField
              data-testid="portfolio-description"
              className="portfolio-field-styles"
              label="Portfolio Description"
              variant="outlined"
              {...register("description")}
              {...field}
              ref={null}
              error={!!errors.description}
              helperText={errors.description ? errors.description?.message : ""}
            />
          )}
        />

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

        <Controller
          name="image"
          control={control}
          defaultValue="Upload Portfolio Cover Image"
          render={({ field }) => (
            <TextField
              data-testid="portfolio-category"
              className="portfolio-field-styles"
              variant="outlined"
              type="file"
              {...register("image")}
              {...field}
              ref={null}
              error={!!errors.image}
              helperText={errors.image ? errors.image?.message : ""}
            />
          )}
        />
        <Controller
          name="linkto"
          control={control}
          render={({ field }) => (
            <TextField
              data-testid="portfolio-linkto"
              className="portfolio-field-styles"
              variant="outlined"
              {...register("linkto")}
              {...field}
              ref={null}
              label="Portfolio Link to Project"
              error={!!errors.linkto}
              helperText={errors.linkto ? errors.linkto?.message : ""}
            />
          )}
        />
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
      </form>
    </section>
  );
};

export default Portfolio;
