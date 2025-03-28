import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    ignores: [
      'node_modules/',
      'dist/**/*',
      'dist/client/bundle.js',
      'test/**/*',
      '_test.js'
    ]
  },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 12,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'no-mixed-spaces-and-tabs': 2,
      indent: [2, 2],
      curly: 2,
      eqeqeq: [2, 'smart'],
      'func-style': [2, 'expression'],
      'no-var': 2,
      'prefer-const': 2,
      semi: 2,
      'no-extra-semi': 2,
      'brace-style': [2, '1tbs', { allowSingleLine: true }],
      'semi-spacing': 1,
      'key-spacing': 1,
      'block-spacing': 1,
      'comma-spacing': 1,
      'no-multi-spaces': 1,
      'space-before-blocks': 1,
      'keyword-spacing': [1, { before: true, after: true }],
      'space-infix-ops': 1,
      'comma-style': [2, 'last'],
      quotes: [1, 'single']
    }
  }
];
