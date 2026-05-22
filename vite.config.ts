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
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  root: path.resolve(__dirname, "./client"),
  build: {
    // Usamos um caminho relativo limpo. Como a raiz (root) é ./client,
    // colocar ../dist vai salvar a pasta 'dist' exatamente na raiz do repositório!
    outDir: "../dist",
    emptyOutDir: true,
  },
});
