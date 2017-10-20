module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['standard', 'react', 'promise'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 0,
    quotes: [2, 'single', { allowTemplateLiterals: true }]
  }
}
