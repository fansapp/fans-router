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
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': ['warn', 100],
  },
};
