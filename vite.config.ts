import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  root: path.resolve(__dirname, "./client"),
  build: {
    // Usamos path.resolve para garantir o caminho absoluto correto para a raiz do repositório
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
