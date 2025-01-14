import { nextJsConfig } from '@repo/eslint-config/next-js';
import pluginQuery from '@tanstack/eslint-plugin-query';

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
  ...pluginQuery.configs['flat/recommended'],
];
