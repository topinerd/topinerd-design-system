import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import {
  flattenTokens,
  transformModeToken,
  transformSemanticToken,
} from "../transformer";

import darkToken from "../../../../design-tokens/src/color-dark.tokens.json";
import lightToken from "../../../../design-tokens/src/color-light.tokens.json";
import alphaToken from "../../../../design-tokens/src/color-alpha.tokens.json";
import semanticColorToken from "../../../../design-tokens/src/color-semantic.tokens.json";

const global = createGlobalTheme(":root", {});

const themeColor = createThemeContract({
  color: transformSemanticToken(semanticColorToken),
});

createTheme(themeColor, {
  color: transformModeToken(semanticColorToken, "light", [
    flattenTokens(lightToken),
    flattenTokens(alphaToken),
  ]),
});

createTheme(themeColor, {
  color: transformModeToken(semanticColorToken, "dark", [
    flattenTokens(darkToken),
    flattenTokens(alphaToken),
  ]),
});

export const vars = { ...global, ...themeColor };
