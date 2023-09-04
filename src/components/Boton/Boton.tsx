import Button, { ButtonProps } from "@mui/material/Button";

import "./Boton.scss";

export interface PugleButtonProps
  extends Omit<
    ButtonProps,
    | "className"
    | "size"
    | "sx"
    | "TouchRippleProps"
    | "tabIndex"
    | "focusVisibleClassName"
    | "shape"
  > {
  fullwidth?: boolean;
  disableRipple?: boolean;
  variant: "contained" | "text" | "outlined";
  children: any;
  className?: Partial<ClassNameProps>;
  "data-testid": string;
  colorVariant?: "primary" | "grey" | "white";
 }

/**
 *
 * @param variant either Text button or contained with background color
 *
 * @param className.root For custom class once the button is instantiated
 *
 */
interface ClassNameProps {
  root: string;
}
const Boton = ({
  children,
  variant,
  className,
  ...props
}: PugleButtonProps): JSX.Element => {
  let variantClassName = "";

  switch (variant) {
    case "contained":
      variantClassName = "button-contained-styles";
      break;
    case "text":
      variantClassName = "button-text-styles";
      break;
    case "outlined":
      variantClassName = "button-outlined-styles";
      break;
    default:
      variantClassName = "";
  }

  return (
    <Button
      fullWidth
      disableRipple
      {...props}
      className={`${variantClassName} ${className?.root}`}
    >
      {children}
    </Button>
  );
};

export default Boton;
