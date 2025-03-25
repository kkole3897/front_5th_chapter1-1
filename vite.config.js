import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.js",
      exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
    },
    base: env.VITE_BASE || "./",
    build: {
      rollupOptions: {
        input: {
          main: "./index.html",
          hash: "./index.hash.html",
        },
      },
    },
  };
});
