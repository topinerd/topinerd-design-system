import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

export const radioCardItemWrapper = style({
  all: "unset",

  boxSizing: "border-box",
  display: "flex",
  height: "5rem",
  padding: "14px 12px",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing["spacing-m"],
  borderRadius: "12px",
  border: `1px solid ${theme.color.border.default}`,

  selectors: {
    '&[data-state="checked"]': {
      outline: `2px solid ${theme.color["button-primary"].default}`,
      background: "#E9F8F3",
    },
  },
});

export const radioCardItem = style({
  border: `1px solid ${theme.color.border.primary}`,
  width: "1.8rem",
  height: "1.8rem",
  borderRadius: "100%",

  selectors: {
    [`${radioCardItemWrapper}[data-state="checked"] &`]: {
      border: `1px solid ${theme.color["button-primary"].default}`,
    },
  },
});

export const radioCardIndicator = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",

  "::after": {
    content: "",
    display: "block",
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    backgroundColor: theme.color["button-primary"].default,
  },
});

export const radioCardLabel = style({
  color: theme.color.text.disabled,
  textAlign: "center",

  fontFamily: "Pretendard",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "140%",

  selectors: {
    [`${radioCardItemWrapper}[data-state="checked"] &`]: {
      color: theme.color.text.primary,
      fontWeight: 500,
    },
  },
});
