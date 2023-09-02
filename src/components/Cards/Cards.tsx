import { ReactNode } from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./Cards.scss";

export interface PugleCardProps {
  icon?: ReactNode;
  cardTitle: string;
  cardContent: string;
  "data-testid": string;
}

const Cards = ({ cardTitle, icon, cardContent, ...props }: PugleCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div className="icon-center-styles">{icon}</div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
