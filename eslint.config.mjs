import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
        },

        files: ['./test/**/*.ts'],

        rules: {
            semi: ['error', 'never'],

            'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
            'array-bracket-spacing': ['error', 'never'],
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            camelcase: ['error', { properties: 'never' }],
            'comma-spacing': ['error', { before: false, after: true }],
            'no-lonely-if': 'error',
            'no-else-return': 'error',
            'no-tabs': 'error',
            'no-trailing-spaces': [
                'error',
                {
                    skipBlankLines: false,
                    ignoreComments: false,
                },
            ],
            quotes: ['error', 'single', { avoidEscape: true }],
            'unicode-bom': ['error', 'never'],
            'object-curly-spacing': ['error', 'always'],
            'keyword-spacing': ['error'],
            'require-atomic-updates': 0,
            'no-unexpected-multiline': 0
        },
    },
];
