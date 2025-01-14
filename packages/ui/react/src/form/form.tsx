"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import {
  formDescription,
  formDescriptionText,
  formLabel,
  formLabelDetail,
  formLabelRequired,
  formLabelTitleText,
  formLabelTitleWrapper,
} from "./form.css";

import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={className} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

type FormLabelElement = React.ElementRef<"label">;
interface FormLabelProps extends React.ComponentPropsWithoutRef<"label"> {
  /**
   * Indicates whether the associated form field is required.
   */
  required?: boolean;

  /**
   * Provides additional details or instructions related to the label.
   */
  detail?: string;
}

const FormLabel = React.forwardRef<FormLabelElement, FormLabelProps>(
  ({ children, className, required, detail, ...props }, ref) => {
    const { formItemId } = useFormField();

    return (
      <label ref={ref} className={formLabel} htmlFor={formItemId} {...props}>
        <span className={formLabelTitleWrapper}>
          <span className={formLabelTitleText}>{children}</span>
          {required && <span className={formLabelRequired}>*</span>}
        </span>
        {detail && <span className={formLabelDetail}>{detail}</span>}
      </label>
    );
  },
);
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <div
      ref={ref}
      id={formDescriptionId}
      className={formDescription}
      {...props}
    >
      <span className={formDescriptionText}>{children}</span>
    </div>
  );
});
FormDescription.displayName = "FormDescription";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormField,
};
