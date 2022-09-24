module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "airbnb", "airbnb-typescript", "next", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        files: ["*.ts", "*.tsx", "*.js"],
        extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
        project: "./tsconfig.json"
    },
    plugins: ["react", "prettier"],
    rules: {
        "react/function-component-definition": "off",
        "react/no-array-index-key": "off",
        "react/require-default-props": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto"
            }
        ],
        "react/jsx-props-no-spreading": "off",
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true
            }
        ],
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                avoidEscape: true
            }
        ]
    },
    parser: "@typescript-eslint/parser"
};
