module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'max-len': ['error', { code: 80 }],
    'require-jsdoc': 'off',
    'prettier/prettier': 'error',
  },
};
