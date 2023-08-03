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
  > {
  fullwidth?: boolean;
  disableRipple?: boolean;
  children: any;
  shape?: "square" | "rounded";
  className?: Partial<ClassNameProps>;
}

/**
 *
 * @param {
 * props.variant (nolinks)
 * Example: <EvaHeader variant="nolinks" />
 * }
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
const Boton = ({ children, shape, className, ...props }: PugleButtonProps) => {
  return (
    <Button
      fullWidth
      disableRipple
      {...props}
      className={`${"button-main-styles"} ${className?.root}`}
    >
      {children}
    </Button>
  );
};

export default Boton;
