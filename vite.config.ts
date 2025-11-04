import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const REPO_NAME = "Mari-Balloon-Proyect-dev";

// https://vite.dev/config/
export default defineConfig({
  base:`/${REPO_NAME}/`,
  plugins: [react(), tailwindcss()],
  server:{
    port:5173,
    host:'localhost'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@use "@/assets/styles/base/variables" as *;@use "@/assets/styles/base/typography" as *;@use "@/assets/styles/base/mixins" as *;',
      },
    },
  },
});
