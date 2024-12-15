import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import {
  flattenTokens,
  transformBasicToken,
  transformModeToken,
  transformSemanticToken,
} from "./transformer";

import COLOR_DARK from "../../../resources/design-tokens/src/token.color-dark.json";
import COLOR_LIGHT from "../../../resources/design-tokens/src/token.color-light.json";
import COLOR_ALPHA from "../../../resources/design-tokens/src/token.color-alpha.json";
import COLOR_SEMANTIC from "../../../resources/design-tokens/src/token.color-semantic.json";
import BREAKPOINTS from "../../../resources/design-tokens/src/token.breakpoints.json";
import RADIUS from "../../../resources/design-tokens/src/token.radius.json";
import SPACING from "../../../resources/design-tokens/src/token.spacing.json";

const breakpoint = transformBasicToken(BREAKPOINTS);
const radius = transformBasicToken(RADIUS);
const spacing = transformBasicToken(SPACING);

const global = createGlobalTheme(":root", {
  breakpoint,
  radius,
  spacing,
});

const semanticColor = transformSemanticToken(COLOR_SEMANTIC);

const color = createThemeContract({
  color: semanticColor,
});

createGlobalTheme(":root", color, {
  color: transformModeToken(COLOR_SEMANTIC, "light", [
    flattenTokens(COLOR_LIGHT),
    flattenTokens(COLOR_ALPHA),
  ]),
});

createGlobalTheme("[data-theme='dark']", color, {
  color: transformModeToken(COLOR_SEMANTIC, "dark", [
    flattenTokens(COLOR_DARK),
    flattenTokens(COLOR_ALPHA),
  ]),
});

export type Theme = {
  breakpoint: typeof breakpoint;
  radius: typeof radius;
  spacing: typeof spacing;
  color: typeof semanticColor;
};

export const theme: Theme = {
  ...global,
  ...color,
};
