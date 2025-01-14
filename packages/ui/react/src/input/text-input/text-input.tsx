import React from "react";
import { textInputBase, textInputContainer } from "./text-input.css";

type TextInputElement = React.ElementRef<"input">;

interface TextInputProps extends React.ComponentPropsWithoutRef<"input"> {
  /**
   *
   */
  leftIcon?: React.ReactNode;

  /**
   *
   */
  rightIcon?: React.ReactNode;
}

const TextInput = React.forwardRef<TextInputElement, TextInputProps>(
  ({ leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={textInputContainer}>
        {leftIcon && leftIcon}
        <input
          {...props}
          ref={ref}
          spellCheck={false}
          className={textInputBase}
        />
        {rightIcon && rightIcon}
      </div>
    );
  },
);
TextInput.displayName = "TextInput";

export { TextInput };
export type { TextInputProps };
