import { style, styleVariants } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  overflow: "hidden",
});

export const viewport = style({
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

export const scrollbar = style({
  display: "flex",
  userSelect: "none",
  touchAction: "none",
  padding: "0.1rem",
});

export const scrollbarOrientation = styleVariants({
  vertical: {
    width: "0.2rem",
    height: "100%",
    borderLeft: "1px solid transparent",
  },
  horizontal: {
    height: "0.2rem",
    flexDirection: "column",
    borderTop: "1px solid transparent",
  },
});

export const thumb = style({
  flex: 1,
  backgroundColor: "hsl(0, 0%, 70%)",
  borderRadius: "9999px",
  position: "relative",

  "::before": {
    content: "",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: "4.4rem",
    minHeight: "4.4rem",
  },
});

export const corner = style({});
