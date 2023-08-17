import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import "./Hero.scss";

export interface HeroProps {
  subtitle1: string;
  title1: string;
  subtitle2: string;
  "data-testid": string;
}

const Hero = ({ subtitle1, title1, subtitle2 }: HeroProps): JSX.Element => {
  return (
    <section className="hero-background-image">
      <div className="copy-text-styles">
        <h3 className="subtitle-text-padding">{subtitle1}</h3>
        <h1 className="title-text-size">{title1}</h1>
        <h4 className="subtitle-text-padding">{subtitle2}</h4>
        <figure className="icon-container-center">
          <ExpandCircleDownIcon fontSize="large" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
