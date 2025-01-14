import * as React from "react";
import {
  numberInputContainer,
  numberInputBase,
  numberInputAdornment,
  numberInputCounter,
} from "./number-input.css";
import {
  IconArrowdownFill,
  IconArrowupFill,
} from "@topinerd-design-system/react-icons";

type NumberInputElement = React.ElementRef<"input">;

interface NumberInputProps extends React.ComponentPropsWithoutRef<"input"> {
  /**
   *
   */
  adornment?: string;
}

const NumberInput = React.forwardRef<NumberInputElement, NumberInputProps>(
  ({ adornment = "", min, max, ...props }, ref) => {
    const inputProps = { min, max, ...props };

    const [value, setValue] = React.useState<number>();

    const increase = () => {
      setValue(prev => {
        const newValue = prev !== undefined ? prev + 1 : 1;
        return Math.min(newValue, Number(max) ?? newValue);
      });
    };

    const decrease = () => {
      setValue(prev => {
        const newValue = prev !== undefined ? prev - 1 : 0;
        return Math.max(newValue, Number(min) ?? newValue);
      });
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      const newValue = e.target.value;
      setValue(Number(newValue) || undefined);
    };

    return (
      <div className={numberInputContainer}>
        <input
          {...inputProps}
          ref={ref}
          type="number"
          value={value}
          onChange={handleChange}
          className={numberInputBase}
        />
        <span className={numberInputAdornment}>{adornment}</span>
        <div className={numberInputCounter}>
          <IconArrowupFill onClick={increase} />
          <IconArrowdownFill onClick={decrease} />
        </div>
      </div>
    );
  },
);
NumberInput.displayName = "NumberInput";

export { NumberInput };
export type { NumberInputProps };
