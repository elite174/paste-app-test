import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      core: path.join(__dirname, "./src/core"),
      ds: path.join(__dirname, "./src/design-system"),
    },
  },
});
