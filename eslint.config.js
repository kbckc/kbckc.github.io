/* eslint-disable import-x/no-named-as-default-member */
/* eslint-disable import-x/no-named-as-default */
/* eslint-disable import-x/no-rename-default */
// @ts-check
import js from '@eslint/js';
import * as eslintParserHTML from '@html-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';
import gitignore from 'eslint-config-flat-gitignore';
import tailwindcss from 'eslint-plugin-better-tailwindcss';
import importX from 'eslint-plugin-import-x';
import packageJson from 'eslint-plugin-package-json';
import perfectionist from 'eslint-plugin-perfectionist';
import regexp from 'eslint-plugin-regexp';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(gitignore(), {
  extends: [
    js.configs.recommended,
    unicorn.configs.recommended,
    stylistic.configs['disable-legacy'],
    stylistic.configs.customize({
      quotes: 'single',
      semi: true,
      jsx: false,
      braceStyle: '1tbs',
      commaDangle: 'always-multiline',
    }),
    regexp.configs.recommended,
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
  ],
  plugins: {
    perfectionist,
  },
  rules: {
    '@stylistic/arrow-parens': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/indent-binary-ops': 'off',
    '@stylistic/multiline-ternary': 'off',

    'perfectionist/sort-imports': [
      'warn',
      {
        newlinesBetween: 0,
      },
    ],
    'perfectionist/sort-named-imports': 'warn',

    'import-x/no-rename-default': 'warn',
    'import-x/no-useless-path-segments': 'warn',

    'unicorn/prefer-query-selector': 'off',
  },
}, {
  files: [
    '**/*.ts',
  ],
  extends: [
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
  ],
  settings: {
    'import-x/resolver': {
      typescript: true,
    },
  },
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
}, {
  files: ['**/*.html'],
  languageOptions: {
    parser: eslintParserHTML,
  },
}, {
  plugins: {
    'better-tailwindcss': tailwindcss,
  },
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/style.css',
    },
  },
  rules: {
    ...tailwindcss.configs['recommended-error'].rules,

    'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
  },
}, {
  files: ['**/package.json'],
  extends: [
    packageJson.configs.recommended,
  ],
});
