import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const buttonStyle = style({
  borderRadius: "0.375rem",
  backgroundColor: "black",
  paddingRight: "0.875rem",
  paddingLeft: "0.875rem",
  paddingTop: "0.625rem",
  paddingBottom: "0.625rem",
  lineHeight: "1.25rem",
  fontSize: "0.875rem",
  fontWeight: "700",
  color: vars.color["button-primary"].default,
  marginTop: "16px",
  marginBottom: "16px",
  textTransform: "uppercase",
});
