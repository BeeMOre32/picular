module.exports = {
  plugins: ['import', 'prettier', 'react', 'react-hooks', 'jsx-a11y'], // 설치한 추가적인 규칙 설정
  extends: ['airbnb', 'prettier', 'airbnb-typescript'],
  env: {
    browser: true, // 실행 환경에 대해서 등록
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // should be already existing
  parserOptions: { // add this object
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // dev 디펜던시 등은 import 하지 않아도 되도록 설정
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
        extensions: ['.jsx', '.js']
      },
    },
  },
}