module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-unreachable": "off",
  },
};
