// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.git/**', '*.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
      },
      globals: globals.browser,
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: {} },
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      'no-console': ['warn', { allow: ['warn', 'error'] }],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'import/order': 'off',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000'], ['^react', '^@?\\w'], ['^@/'], ['^\\.']],
        },
      ],
      'simple-import-sort/exports': 'error',

      //any 타입 사용 가능
      '@typescript-eslint/no-explicit-any': 'off',

      //unused expressions 사용 가능(?, &&)
      '@typescript-eslint/no-unused-expressions': 'off',

      // boolean 사용 가능 (!!, Boolean())
      "no-extra-boolean-cast": "off",
      //useEffect에서 setState 사용 가능
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    files: ['**/*.stories.@(ts|tsx)', 'src/stories/**/*.{ts,tsx}'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  ...storybook.configs['flat/recommended'],
]
