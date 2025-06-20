import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Automatically open browser
  },
  build: {
    outDir: "dist",
    sourcemap: true, // Helpful for debugging
  },
  css: {
    postcss: "./postcss.config.js", // Explicitly point to your postcss config
  },
  resolve: {
    alias: {
      "@": "/src", // Allows imports like '@/components/ui/Button'
    },
  },
});
