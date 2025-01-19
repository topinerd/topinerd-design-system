import * as React from "react";
import { clsx } from "clsx";
import { baseInput } from "./base-input.css";

type BaseInputElement = React.ElementRef<"input">;
interface BaseInputProps extends React.ComponentPropsWithoutRef<"input"> {}

const BaseInput = React.forwardRef<BaseInputElement, BaseInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input {...props} ref={ref} className={clsx(className, baseInput)} />
    );
  },
);

export { BaseInput };
export type { BaseInputElement, BaseInputProps };
