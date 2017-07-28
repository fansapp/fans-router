/* eslint-disable no-undef */

module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: false,
  },
  globals: {
    module: true,
    process: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-closing-bracket-location': 'off',
    'no-underscore-dangle': ['error', {
      allow: ['_error', '__PRELOADED_STATE__'],
    }],
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
};
