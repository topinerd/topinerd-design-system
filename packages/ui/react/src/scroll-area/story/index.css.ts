import { style } from "@vanilla-extract/css";

export const defaultVariant = style({
  height: "20rem",
  width: "100%",
});

export const horizontalScrollArea = style({
  width: "100%",
});

export const container = style({
  display: "flex",
  width: "100%",
  marginRight: "1.6rem",
  marginLeft: "1.6rem",
  padding: "1.6rem",
});

export const photo = style({
  flexShrink: "0",
});

export const imgWrapper = style({
  overflow: "hidden",
  borderRadius: "0.2rem",
});

export const img = style({
  aspectRatio: "3/4",
  height: "fit-content",
  width: "fit-content",
  objectFit: "cover",
});

export const caption = style({
  paddingTop: "0.8rem",
  fontSize: "1.2rem",
  lineHeight: "1.6rem",
});

export const artist = style({
  fontWeight: 600,
});
