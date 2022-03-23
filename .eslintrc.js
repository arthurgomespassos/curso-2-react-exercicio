module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@babel/eslint-parser', // added by me
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off', // permite usar .jsx em arquivos .js sem erro no eslint
    'react/state-in-constructor': 'off', // não obriga usar o state dentro do constructor permitindo usar diretamente
    'react/forbid-prop-types': 'off', // não era pra precisar disso mas é um erro ainda não corrigido do eslint
    'react/function-component-definition': 'off', // permite usar
    'react/prop-types': 'off', // desativa obrigatoriedade da validação de tipo das propriedades recebidas pelos componentes
    'react/jsx-one-expression-per-line': 'off', // permite escrever coisas como <h1>OI {props.nome}</h1> na mesma linha
  },
};
