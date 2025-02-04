import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface ChipCategoryProps {
  "data-testid": string;
  label: string;
  onClick?: () => void;
  variant: "filled" | "outlined";
}

const ChipCategory = ({
  label,
  variant = "outlined",
  onClick,
  ...props
}: ChipCategoryProps) => {

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Typography variant="body2" color="text.secondary">
        <Chip
          data-testid={props["data-testid"]}
          label={label}
          variant={variant}
          onClick={handleClick}
        />
      </Typography>
    </Stack>
  );
};

export default ChipCategory;
