module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'plugin:prettier/recommended',
        'prettier/react',
        'plugin:mdx/recommended',
        'plugin:react/recommended',
    ],
    overrides: [
        {
            files: ['*.mdx'],
            rules: {
                'prettier/prettier': [
                    2,
                    {
                        // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
                        parser: 'markdown',
                    },
                ],
                'react/jsx-filename-extension': 0,
            },
        },
        {
            files: ['*.mdx'],
            extends: ['plugin:mdx/overrides'],
        },
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                semi: ['error', 'never'],
                quotes: ['error', 'single'],
                '@typescript-eslint/no-unused-vars': 'error',
                'class-methods-use-this': 0,
                'import/extensions': 'off',
                'import/no-default-export': 'warn',
                'import/no-extraneous-dependencies': 'off',
                'import/no-unresolved': 'off',
                'import/prefer-default-export': 'off',
                'jsx-a11y/anchor-is-valid': 0,
                'max-lines-per-function': ['warn', 250],
                'no-alert': 'error',
                'no-cond-assign': 'error',
                'no-else-return': 1,
                'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
                'no-shadow': 'off',
                'no-unused-vars': 'off',
                'prettier/prettier': 'error',
                'react/display-name': 0,
                'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
                'react/jsx-handler-names': ['warn'],
                'react/jsx-props-no-spreading': 'off',
                'react/no-array-index-key': 0,
                'react/prop-types': 0,
                'react/react-in-jsx-scope': 0,
                'react/self-closing-comp': 2,
            },
        },
    ],
    plugins: ['prettier', 'react'],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-alert': 'error', // airbnb использует предупреждение
        'no-else-return': 1,
        'no-cond-assign': 'error',
        'no-unused-expressions': 0,
        'mdx/no-unused-expressions': ['error', { allowShortCircuit: true }],
        'class-methods-use-this': 0,
        'react/jsx-props-no-spreading': 'off',
        'react/self-closing-comp': 2,
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/forbid-component-props': [1, { forbid: ['style'] }],
        'import/no-default-export': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
        'react-hooks/exhaustive-deps': 0,
        'jsx-a11y/anchor-is-valid': 0,
    },
}
