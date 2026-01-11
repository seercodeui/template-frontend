export default {
  ignores: ["dist/**", "node_modules/**", "coverage/**"],

  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],

  plugins: ["stylelint-order"],

  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],

  rules: {
    // порядок свойств
    "order/properties-alphabetical-order": true,

    // чтобы SCSS at-rules не ругались
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // по желанию
    "selector-class-pattern": null,
  },
};
