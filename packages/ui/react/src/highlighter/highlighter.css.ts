import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

export const mark = style({
  color: theme.color.text.accent,

  // TODO - [abstract]
  /* w/body-16-m */
  fontFamily: "Pretendard",
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "140%",
});

export const text = style({
  color: theme.color.text.primary,

  // TODO - [abstract]
  /* w/body-16-m */
  fontFamily: "Pretendard",
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "140%",
});
