import { browser } from "globals";

/* global module */
module.exports = {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: {
    globals: {
      ...browser,
      module: "readonly",
      exports: "readonly",
      require: "readonly",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
};
