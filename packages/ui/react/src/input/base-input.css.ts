import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

export const baseInput = style({
  all: "unset",
  width: "100%",
  height: "100%",
  color: theme.color.text.primary,
  padding: `${theme.spacing["spacing-sm"]} ${theme.spacing["spacing-m"]}`,

  MozAppearance: "textfield",
  "::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
  },

  "::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
  },

  "::placeholder": {
    color: theme.color.text.disabled,
  },

  // TODO - [abstract typo]
  /* m/body-14-r */
  fontFamily: "Pretendard",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.96rem",
});
