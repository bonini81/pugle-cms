import TextField, { TextFieldProps } from "@mui/material/TextField";

export interface PugleTextFieldProps extends Omit<TextFieldProps, "variant"> {
  variant?: "standard" | "outlined" | "filled";
  "data-testid": string;
}

const CoTextField = ({
  variant = "outlined",
  ...props
}: PugleTextFieldProps): JSX.Element => {
  return <TextField fullWidth variant={variant} {...props} />;
};

export default CoTextField;
