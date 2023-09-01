import Card, {CardProps} from "@mui/material/Card";

export interface PugleCardProps
  extends Pick<
    CardProps,
   
  > {
  "data-testid": string;
}


const Cards = () => {
  return <div>Hello</div>;
}

export default Cards;
