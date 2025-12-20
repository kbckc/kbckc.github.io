// @ts-check
import { defineConfig } from 'eslint/config';
import gitignore from 'eslint-config-flat-gitignore';
import tseslint from 'typescript-eslint';
import tailwindcss from 'eslint-plugin-better-tailwindcss';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintParserHTML from '@html-eslint/parser';

export default defineConfig(gitignore(), {
  extends: [
    js.configs.recommended,
    stylistic.configs['disable-legacy'],
    stylistic.configs.customize({
      quotes: 'single',
      semi: true,
      jsx: false,
      braceStyle: '1tbs',
      commaDangle: 'always-multiline',
    }),
  ],
  rules: {
    '@stylistic/arrow-parens': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/indent-binary-ops': 'off',
    '@stylistic/multiline-ternary': 'off',
  },
}, {
  files: [
    '**/*.ts',
  ],
  extends: [
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
  ],
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
});
