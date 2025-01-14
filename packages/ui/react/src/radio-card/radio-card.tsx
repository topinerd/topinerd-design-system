"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cnMerge } from "../utils";
import {
  radioCardIndicator,
  radioCardItem,
  radioCardItemWrapper,
  radioCardLabel,
} from "./radio-card.css";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root {...props} ref={ref} className={className} />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      {...props}
      ref={ref}
      className={cnMerge(radioCardItemWrapper, className)}
    >
      <div className={radioCardItem}>
        <RadioGroupPrimitive.Indicator className={radioCardIndicator} />
      </div>
      <label className={radioCardLabel}>{children}</label>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
