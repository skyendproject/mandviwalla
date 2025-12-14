import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Global ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // Custom rule overrides
  {
    rules: {
      // Disable unused vars warnings (TS + JS)
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Disable Tailwind CSS lint warnings
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-contradicting-classname": "off",

      // Optional: silence React warnings Next already handles
      "react/react-in-jsx-scope": "off",
    },
  },
]);
