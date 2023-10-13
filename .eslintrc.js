module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'i18next'
    ],
    rules: {
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/naming-convention': 'warn',
        'i18next/no-literal-string': ['error', {markupOnly: true}]
    }
}
