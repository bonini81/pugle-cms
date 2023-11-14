import TextField, { TextFieldProps } from "@mui/material/TextField";

export interface PugleTextFieldProps
  extends Omit<TextFieldProps, "defaultValue"> {
  variant?: "standard" | "outlined" | "filled";
  label?: string;
  "data-testid": string;
}

const CoTextField = ({
  variant = "outlined",
  label = "TextFilled",
  ...props
}: PugleTextFieldProps): JSX.Element => {
  return <TextField fullWidth variant={variant} label={label} {...props} />;
};

export default CoTextField;
