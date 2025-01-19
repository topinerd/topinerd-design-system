import { theme } from "@topinerd-design-system/preset";
import { style } from "@vanilla-extract/css";

// TODO - [gap, borderRadius => abstract]
export const inputContainer = style({
  height: "5rem",
  display: "flex",
  alignItems: "center",
  flex: "1 0 0",
  gap: "0.8rem",
  borderRadius: "1.2rem",
  border: `0.1rem solid ${theme.color.border.default}`,

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
