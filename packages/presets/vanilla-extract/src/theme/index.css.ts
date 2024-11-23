import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import {
  flattenTokens,
  transformBasicToken,
  transformModeToken,
  transformSemanticToken,
} from "../transformer";

import COLOR_DARK from "../../../../design-tokens/src/token.color-dark.json";
import COLOR_LIGHT from "../../../../design-tokens/src/token.color-light.json";
import COLOR_ALPHA from "../../../../design-tokens/src/token.color-alpha.json";
import COLOR_SEMANTIC from "../../../../design-tokens/src/token.color-semantic.json";
import BREAKPOINTS from "../../../../design-tokens/src/token.breakpoints.json";
import RADIUS from "../../../../design-tokens/src/token.radius.json";
import SPACING from "../../../../design-tokens/src/token.spacing.json";

const global = createGlobalTheme(":root", {
  breakpoint: transformBasicToken(BREAKPOINTS),
  radius: transformBasicToken(RADIUS),
  spacing: transformBasicToken(SPACING),
});

const color = createThemeContract({
  color: transformSemanticToken(COLOR_SEMANTIC),
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

export const theme = {
  ...global,
  ...color,
};
