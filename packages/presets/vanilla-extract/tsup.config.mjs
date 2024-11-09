import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  /**
   * configuration
   */
  format: ["esm", "cjs"],
  tsconfig: "tsconfig.json",

  /**
   * entrypoint, outpout directory
   */
  entry: ["src/index.ts"],
  outDir: "dist",

  /**
   * options
   */
  dts: true,
  sourcemap: true,
  minify: true,

  /**
   * plugins
   * @todo - fix type error
   */
  //@ts-ignore
  esbuildPlugins: [vanillaExtractPlugin()],
});
