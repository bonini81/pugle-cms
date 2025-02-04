import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import "./ChipCategory.scss";

export interface ChipCategoryProps {
  "data-testid": string;
  label: string;
  onClick?: () => void;
  variant: "filled" | "outlined";
}

const ChipCategory = ({
  label,
  variant,
  onClick,
  ...props
}: ChipCategoryProps) => {

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Typography variant="body2" color="text.secondary">
        <Chip
          className="chip__margin-right"
          data-testid={props["data-testid"]}
          label={label}
          variant={variant}
          onClick={handleClick}
      />
      </Typography>
  );
};

export default ChipCategory;
