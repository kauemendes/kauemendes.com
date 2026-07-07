import coreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'docs/**',
      'posts/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  ...coreWebVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      // Pre-existing SSR mount-guard pattern (setIsMounted(true) in effect);
      // flagged as an error by eslint-plugin-react-hooks 7. Keep as warning.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];

export default eslintConfig;
