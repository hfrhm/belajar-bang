import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-plugin-prettier';
import path from 'path';

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': ['off'],
      'react-refresh/only-export-components': ['off'],
      'prettier/prettier': ['error'],
    },
    settings: {
      tailwindcss: {
        config: path.join(__dirname, './tailwind.config.ts'),
      },
    },
  },
);
