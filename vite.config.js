import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" lets the build work on any GitHub Pages repo name
export default defineConfig({ base: "./", plugins: [react(), tailwindcss()] });
