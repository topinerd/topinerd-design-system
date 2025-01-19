import React from "react";
import { BaseInput } from "../base-input";
import { InputContainer } from "../input-container";

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
      <InputContainer>
        {leftIcon && leftIcon}
        <BaseInput {...props} ref={ref} />
        {rightIcon && rightIcon}
      </InputContainer>
    );
  },
);
TextInput.displayName = "TextInput";

export { TextInput };
export type { TextInputProps };
