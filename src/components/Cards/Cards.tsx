import { ReactNode } from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./Cards.scss";

export interface PugleCardProps {
  graphic?: ReactNode;
  cardTitle: string;
  cardContent: string;
  "data-testid": string;
  cta?: boolean;
  colorVariant?: "primary" | "grey" | "white";
  onClick?: () => void;
}

const Cards = ({
  cardTitle,
  graphic,
  cardContent,
  colorVariant,
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
    <Card sx={{ maxWidth: 345 }}>
      {graphic ? <div className="graphic-div-paddings">{graphic}</div> : ""}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={variantClassName}
          data-testid={props["data-testid"]}
        >
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardContent}
        </Typography>
      </CardContent>
      {cta ? (
        <CardActionArea className="cta-div-paddings" onClick={onClick}>
          Ver más
        </CardActionArea>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Cards;
