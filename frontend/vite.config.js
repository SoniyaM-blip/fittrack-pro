import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true, // ✅ IMPORTANT FIX
    setupFiles: "./src/test/setup.js",
  },
});