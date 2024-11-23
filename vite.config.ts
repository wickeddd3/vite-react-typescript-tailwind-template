/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/router": path.resolve(__dirname, "./src/router"),
      "@/schema": path.resolve(__dirname, "./src/schema"),
    },
  },
  test: {
    // support `describe`, `test` etc. globally,
    // so you don't need to import them every time
    globals: true,
    // run tests in jsdom environment
    environment: "jsdom",
    // global test setup
    setupFiles: "./src/vitest.setup.ts",
  },
});
