module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-use-before-define": "off",
    "no-console": "off",
    "no-param-reassign": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/prefer-stateless-function": "off",
    "react/no-array-index-key": "off"
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
