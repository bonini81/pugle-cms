import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "../../components/CoTextField";

const Portfolio = () => {
  interface PortfolioFormValues {
    category: string;
    image: string;
    title: string;
  }

  const schema = yup.object().shape({
    category: yup.string().required("La categoria es requerida."),
    image: yup.string().required("La imagen es requerida."),
    title: yup.string().required("El título es requerido."),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PortfolioFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: "",
      title: "",
      image: "",
    },
  });

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">Portfolio Upload Page</h2>
      <p>Page to Upload Portfolio Content</p>
      <form>
        <TextField data-testid="portfolio-title" type="text">
          Title
        </TextField>
        <TextField data-testid="portfolio-alt" type="text">
          Alt Image Text
        </TextField>

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
              label="Portfolio Category"
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
      </form>
    </section>
  );
};

export default Portfolio;
