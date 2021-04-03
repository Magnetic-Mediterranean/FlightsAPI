module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'brace-style': [
      'error',
      'stroustrup'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-unused-vars': [
      'warn'
    ],
    'no-var': [
      'off'
    ],
    'one-var': [
      'off'
    ]
  }
};
