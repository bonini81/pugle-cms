import { ReactNode } from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import "./Cards.scss";

export interface PugleCardProps {
  graphic?: ReactNode;
  img?: string;
  cardTitle: string;
  cardContent?: string;
  cardCategory?: string;
  "data-testid": string;
  chip?: boolean;
  cta?: boolean;
  colorVariant?: "primary" | "grey" | "white";
  onClick?: () => void;
}

const Cards = ({
  cardTitle,
  cardCategory,
  img,
  graphic,
  cardContent,
  colorVariant,
  chip,
  cta,
  onClick,
  ...props
}: PugleCardProps) => {
  let variantClassName = "";

  switch (colorVariant) {
    case "primary":
      variantClassName = "card-content-color__primary";
      break;
    case "grey":
      variantClassName = "card-content-color__grey";
      break;
    case "white":
      variantClassName = "card-content-color__white";
      break;
    default:
      variantClassName = "card-content-color__primary";
  }

  return (
    <Card>
      {graphic ? <div className="graphic-div-paddings">{graphic}</div> : ""}
      {img ? <img src={img} alt={cardTitle} width="100%" height="200px" /> : ""}
      <CardContent>
        {cta ? (
          <CardActionArea className="cta-div-paddings" onClick={onClick}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={variantClassName}
              data-testid={props["data-testid"]}
            >
              {cardTitle}
            </Typography>
          </CardActionArea>
        ) : (
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={variantClassName}
            data-testid={props["data-testid"]}
          >
            {cardTitle}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {chip ? <Chip label={cardCategory} variant="filled" /> : ""}
          {cardContent}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
