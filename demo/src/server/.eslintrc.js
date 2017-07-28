/* eslint-disable no-undef */

module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    'no-underscore-dangle': ['error', {
      allow: ['_error', '__DEBUG__'],
    }],
  },
};
