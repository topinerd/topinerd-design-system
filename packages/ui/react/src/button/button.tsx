import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { button } from "./button.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariants<typeof button> & {
    /**
     *
     */
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "m", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={button({ variant, size })} {...props} />;
  },
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
