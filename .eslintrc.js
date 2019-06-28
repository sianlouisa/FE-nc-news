module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-shadow': 0,
    'react/sort-comp': 0,
    'no-undef': 1,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 2,
  },
};
