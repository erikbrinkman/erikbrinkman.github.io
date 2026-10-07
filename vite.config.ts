import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      adapter: adapter({ pages: "dist", fallback: "404.html" }),
      compilerOptions: { runes: true },
    }),
    icons({ compiler: "svelte", scale: 1 }),
  ],
  build: { target: "es2024" },
});
