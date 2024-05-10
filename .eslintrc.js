module.exports = {
  root: true,
  extends: '@react-native',
  plugins: [
    'import',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    "quotes": "off",
    "prettier/prettier": "off",

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": "off",

    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^node:/",
          "/@^/",
          "module",
          "/^~/",
          [
            "parent",
            "sibling",
            "index"
          ]
        ]
      }
    ]
  },
};
