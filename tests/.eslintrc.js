module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  globals: {},
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'max-len': 'warn',
  },
};
