import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import {
  flattenTokens,
  transformBasicToken,
  transformModeToken,
  transformSemanticToken,
} from "../transformer";

import darkToken from "../../../../design-tokens/src/color-dark.tokens.json";
import lightToken from "../../../../design-tokens/src/color-light.tokens.json";
import alphaToken from "../../../../design-tokens/src/color-alpha.tokens.json";
import semanticColorToken from "../../../../design-tokens/src/color-semantic.tokens.json";

import breakpointToken from "../../../../design-tokens/src/breakpoints.tokens.json";
import radiusToken from "../../../../design-tokens/src/radius.tokens.json";
import spacingToken from "../../../../design-tokens/src/spacing.tokens.json";

const global = createGlobalTheme(":root", {
  breakpoint: transformBasicToken(breakpointToken),
  radius: transformBasicToken(radiusToken),
  spacing: transformBasicToken(spacingToken),
});

const color = createThemeContract({
  color: transformSemanticToken(semanticColorToken),
});

const lightTheme = createTheme(color, {
  color: transformModeToken(semanticColorToken, "light", [
    flattenTokens(lightToken),
    flattenTokens(alphaToken),
  ]),
});

const darkTheme = createTheme(color, {
  color: transformModeToken(semanticColorToken, "dark", [
    flattenTokens(darkToken),
    flattenTokens(alphaToken),
  ]),
});

export const theme = { ...global, ...color, lightTheme, darkTheme };
