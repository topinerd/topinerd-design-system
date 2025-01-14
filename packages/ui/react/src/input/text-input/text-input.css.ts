import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

export const textInputContainer = style({
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  height: "5rem",
  padding: `${theme.spacing["spacing-sm"]} ${theme.spacing["spacing-m"]}`,
  alignItems: "center",
  gap: "8px",
  flex: "1 0 0",
  borderRadius: "12px",
  border: `1px solid ${theme.color.border.default}`,

  selectors: {
    "&:focus-within": {
      // TODO - [to semantic color]
      outline: `2px solid #25B98C`,
      outlineOffset: "-1px",
    },

    "&:hover:not(:focus-within)": {
      border: `1px solid ${theme.color.border.hover}`,
    },
  },
});

export const textInputBase = style({
  all: "unset",
  boxSizing: "content-box",
  flex: "1 0 0",
  color: theme.color.text.primary,

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
