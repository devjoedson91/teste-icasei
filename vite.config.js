import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        favs: "favs/index.html",
      },
    },
  },
});
