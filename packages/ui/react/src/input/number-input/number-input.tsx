import * as React from "react";
import {
  numberInputAdornment,
  numberInputCounter,
  up,
  down,
} from "./number-input.css";
import {
  IconArrowdownFill,
  IconArrowupFill,
} from "@topinerd-design-system/react-icons";
import { BaseInput } from "../base-input";
import { InputContainer } from "../input-container";

type NumberInputElement = React.ElementRef<"input">;
type OmiitedProps = "value" | "max" | "min" | "defaultValue";

interface NumberInputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, OmiitedProps> {
  /**
   * Text or unit to display at the end of the input
   */
  adornment?: string;

  /**
   * Current numeric value
   */
  defaultValue?: number;

  /**
   * Minimum value allowed
   */
  min?: number;

  /**
   * Maximum value allowed
   */
  max?: number;

  /**
   *
   */
  onValueChange?: (value: string) => void;
}

const NumberInput = React.forwardRef<NumberInputElement, NumberInputProps>(
  (
    { adornment = "", min, max, defaultValue, onValueChange, ...props },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<string>(
      defaultValue !== undefined ? String(defaultValue) : "",
    );

    /**
     * Converts the given string or number to a number,
     * returning 0 if parsing fails (NaN).
     */
    const toNumber = (val: string | number) => {
      const parsed = Number(val);
      return Number.isNaN(parsed) ? 0 : parsed;
    };

    const increase = () => {
      setInternalValue(prevStr => {
        const currentNum = toNumber(prevStr);
        const nextNum =
          max !== undefined ? Math.min(currentNum + 1, max) : currentNum + 1;

        onValueChange && onValueChange(String(nextNum));

        return String(nextNum);
      });
    };

    const decrease = () => {
      setInternalValue(prevStr => {
        const currentNum = toNumber(prevStr);
        const nextNum =
          min !== undefined ? Math.max(currentNum - 1, min) : currentNum - 1;

        onValueChange && onValueChange(String(nextNum));

        return String(nextNum);
      });
    };

    /**
     * Handle changes on each user input:
     * - Parse the string into a number (e.g., "000005" -> 5).
     * - If empty, set to "".
     */
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      const inputValue = e.target.value;

      // If the input is empty, keep it as ""
      if (inputValue === "") {
        setInternalValue("");
        onValueChange && onValueChange("");
        return;
      }

      // Otherwise, convert to a number and then back to a string
      const parsed = Number(inputValue);
      if (!isNaN(parsed)) {
        setInternalValue(String(parsed));
        onValueChange && onValueChange(String(parsed));
      }
    };

    /**
     * Handle keydown events:
     * - Prevent "-" key
     * - Prevent "e" key
     * - Use arrow keys to increase/decrease value.
     */
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
      if (e.key === "-" || e.key === "e") {
        e.preventDefault();
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        increase();
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        decrease();
        return;
      }
    };

    /**
     * Handle blur (focus leaving):
     * - Clamp final value to min/max if out of range.
     */
    const handleBlur: React.FocusEventHandler<HTMLInputElement> = e => {
      const finalNum = toNumber(internalValue);

      if (min !== undefined && finalNum < min) {
        setInternalValue(String(min));
        onValueChange && onValueChange(String(min));
        return;
      }

      if (max !== undefined && finalNum > max) {
        setInternalValue(String(max));
        onValueChange && onValueChange(String(max));
        return;
      }
    };

    return (
      <InputContainer>
        <BaseInput
          {...props}
          ref={ref}
          type="number"
          min={min}
          max={max}
          value={internalValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
        <span className={numberInputAdornment}>{adornment}</span>
        <div className={numberInputCounter}>
          <IconArrowupFill onClick={increase} className={up} />
          <IconArrowdownFill onClick={decrease} className={down} />
        </div>
      </InputContainer>
    );
  },
);
NumberInput.displayName = "NumberInput";

export { NumberInput };
export type { NumberInputProps };
