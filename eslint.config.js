import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Global ignore setup for Flat Config (No external import needed)
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    // Explicitly registering plugins for Flat Config architecture
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Composing recommended configurations directly into the rules object
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Vite React Refresh rule definition
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Your custom unused variables tracking pattern
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
];
