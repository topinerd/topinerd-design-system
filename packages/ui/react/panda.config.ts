import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: [],
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
  jsxFramework: "react",
  outExtension: "js",
});
