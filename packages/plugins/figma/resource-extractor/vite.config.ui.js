/// <reference types="vitest" />
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(() => ({
  plugins: [react(), viteSingleFile()],
  root: path.resolve("src/app"),
  build: {
    outDir: path.resolve("dist"),
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve("src/app/index.html"),
    },
  },
}));
