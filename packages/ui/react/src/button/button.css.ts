import { recipe } from "@vanilla-extract/recipes";
import { theme } from "@topinerd-design-system/preset";

export const button = recipe({
  base: {
    all: "unset",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    borderRadius: theme.radius["radius-2xl"],
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "140%",
  },
  variants: {
    variant: {
      primary: {
        background: theme.color["button-primary"].default,
        color: "#FFF",
        ":hover": {
          background: theme.color["button-primary"].hover,
        },
        ":active": {
          background: theme.color["button-primary"].pressed,
        },
        ":disabled": {
          background: theme.color["button-primary"].disabled,
          cursor: "not-allowed",
        },
      },
      secondary: {
        background: "#E9F8F3",
        color: theme.color.text.accent,
      },
      tertiary: {
        background: "#F8F8F8",
        color: theme.color.text.secondary,
        ":hover": {
          background: "#F4F4F4",
        },
        ":active": {
          background: "#E8E9E9",
        },
      },
      outline: {
        color: theme.color.text.secondary,
        border: `1px solid ${theme.color.border.primary}`,
      },
    },
    size: {
      s: {
        padding: `${theme.spacing["spacing-ss"]} ${theme.spacing["spacing-md"]}`,
      },
      m: {
        padding: `${theme.spacing["spacing-sm"]} ${theme.spacing["spacing-lg"]}`,
      },
    },
  },
});
