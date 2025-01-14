import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

export const numberInputContainer = style({
  position: "relative",
  display: "flex",
  height: "5rem",
  paddingLeft: "16px",
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

export const numberInputBase = style({
  MozAppearance: "textfield",
  "::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
  },
  "::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
  },

  all: "unset",
  flex: "1 0 0",
  color: theme.color.text.primary,

  // TODO - [abstract typo]
  /* m/body-14-r */
  fontFamily: "Pretendard",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.96rem",
});

export const numberInputAdornment = style({
  userSelect: "none",

  // TODO - [abstract typo]
  /* m/body-14-r */
  fontFamily: "Pretendard",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.96rem",
});

export const numberInputCounter = style({
  right: "0rem",
  top: "0rem",
  display: "flex",
  width: "2.3rem",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0rem 1.1rem 1.1rem 0rem",
  // TODO - [to semantic color]
  borderLeft: `0.1rem solid ${theme.color.border.primary}`,
  background: theme.color.background.surface.secondary,
});

export const up = style({});

export const down = style({});
