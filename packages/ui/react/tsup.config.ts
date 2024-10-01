import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  entry: [
    "src/index.ts",
  ],
  sourcemap: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  //@ts-ignore
  esbuildPlugins: [vanillaExtractPlugin()],
  dts: true,
  noExternal: ["@fontsource"],
});