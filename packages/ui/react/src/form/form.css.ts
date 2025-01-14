import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

export const formLabel = style({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing["spacing-m"],
  alignSelf: "stretch",
});

export const formLabelTitleWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const formLabelTitleText = style({
  color: theme.color.text.primary,
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "140%",
});

export const formLabelRequired = style({
  color: "#FF1933",
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "140%",
});

export const formLabelDetail = style({
  color: theme.color.text.tertiary,
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "140%",
});

export const formDescription = style({
  display: "flex",
  padding: theme.spacing["spacing-sm"],
  alignItems: "center",
  alignSelf: "stretch",
  gap: "10px",
  borderRadius: theme.radius["radius-xl"],
  background: theme.color.background.surface.secondary,
});

export const formDescriptionText = style({
  color: theme.color.text.secondary,
  fontSize: "1.2rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "140%",
});
