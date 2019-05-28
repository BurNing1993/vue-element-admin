module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-cycle': [2, { maxDepth: 1 }],
    'consistent-return': 'off',
    'max-len': ['error', { code: 150 }],
    'no-param-reassign': 'off',
    'array-callback-return': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
