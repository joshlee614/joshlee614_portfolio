import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/create-a-world-class-founder-portfolio/",
  plugins: [react(), tailwindcss()],
});
