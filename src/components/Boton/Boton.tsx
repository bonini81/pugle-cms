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
}

/**
 *
 * @param variant either Text button or contained with background color
 *
  
 * @returns No links in header in Desktop and Mobile
 *
 * @param {
 * props.variant (links)
 * Example: <EvaHeader variant="links" />
 * }
 * @returns Header menu with links and button in header in Desktop and Mobile
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
}: PugleButtonProps) => {
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
