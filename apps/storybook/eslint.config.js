import { config } from "@topinerd-design-system/eslint-config/tseslint-react-internal";
import storybook from "eslint-plugin-storybook";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  ...storybook.configs["flat/recommended"],
  { ignores: ["!.storybook"] },
];
