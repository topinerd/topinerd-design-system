import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

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

export const up = style({
  color: theme.color.text.disabled,

  ":hover": {
    color: theme.color.text.primary,
  },
});

export const down = style({
  color: theme.color.text.disabled,

  ":hover": {
    color: theme.color.text.primary,
  },
});
