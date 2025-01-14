import { nextJsConfig } from '@repo/eslint-config/next-js';
import pluginReactThree from '@react-three/eslint-plugin';
/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
];
