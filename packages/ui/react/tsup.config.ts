import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  outDir: "dist",
  format: ["esm", "cjs"],
  tsconfig: "tsconfig.json",
  dts: true,
  sourcemap: true,
  noExternal: ["@fontsource"],
});
