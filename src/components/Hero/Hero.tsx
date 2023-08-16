import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-background-image">
      <div className="copy-text-styles">
        <h3 className="subtitle-text-padding">
          Hola soy Msc. Andrés Domínguez Bonini
        </h3>
        <h1 className="title-text-size">
          Desarrollador Front End con React y Wordpress y SEO
        </h1>
        <h4 className="subtitle-text-padding">
          Desarrollo de Applicaciones Web, Paginas Web y Tiendas Online a medida
        </h4>
        <figure className="icon-container-center">
          <ExpandCircleDownIcon fontSize="large" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
