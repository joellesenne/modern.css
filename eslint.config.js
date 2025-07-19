// Import necessary modules
import globals from "globals";
import pluginJs from "@eslint/js";

/**
 * ESLint configuration for JavaScript files.
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  // Configuration for JavaScript files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
    },
  },
  // Configuration for browser globals
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Recommended configuration from @eslint/js plugin
  pluginJs.configs.recommended,
];