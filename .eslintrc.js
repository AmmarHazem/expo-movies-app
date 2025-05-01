module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended", // Make sure to put it last in the array
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier",
  ],
  rules: {
    // Add or override specific rules here
    "no-unused-vars": "off", // Handled by TypeScript
    "@typescript-eslint/no-unused-vars": "warn",
    "react/prop-types": "off", // Not needed with TypeScript
    "react/react-in-jsx-scope": "off", // Not needed with modern React
    "prettier/prettier": "warn", // Or "error" for stricter enforcement
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    "react-native/react-native": true,
  },
  globals: {
    __DEV__: true,
  },
};
