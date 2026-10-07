import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [tailwindcss(), svelte(), icons({ compiler: "svelte", scale: 1 })],
  build: {
    target: "es2024",
    rollupOptions: {
      // scripts/prerender.ts renders each of the second set into its page from the first
      input: isSsrBuild
        ? {
            app: "src/app.svelte",
            resume: "src/resume/resume.svelte",
            cv: "src/resume/cv.svelte",
          }
        : ["index.html", "resume/index.html", "resume/cv/index.html"],
    },
  },
}));
