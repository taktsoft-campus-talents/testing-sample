import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  // ------------------------------
  {
    extends: "vite.config.ts",
    test: {
      name: "unit",
      include: ["src/**/*.test.ts"],
      environment: "node",
    },
  },
  // ------------------------------
  {
    extends: "vite.config.ts",
    test: {
      name: "browser",
      include: ["src/**/*.test.tsx"],
      browser: {
        enabled: true,
        provider: "playwright", // https://vitest.dev/guide/browser/playwright
        instances: [{ browser: "chromium" }],
      },
    },
  },
  // ------------------------------
]);
