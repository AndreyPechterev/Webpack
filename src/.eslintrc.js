module.exports = {
    root: true,
    rules: {
        "no-unused-vars": "warn",
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        ecmaVersion: 9,
        sourceType: "module",
    },
    env: {
        es6: true,
        browser: true,
    },
    extends: ["eslint:recommended"],
    plugins: ["@babel/eslint-plugin"],
};
