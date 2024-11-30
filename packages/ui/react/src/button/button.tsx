import React from "react";
import type { ButtonProps } from "./button.types";
import { buttonStyle } from "./button.css";

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={buttonStyle}>{children}</button>;
};

export { Button };

Button.displayName = "Button";
