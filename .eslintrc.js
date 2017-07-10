module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  globals: {},
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  rules: {
    'max-len': 'warn',
  },
};
