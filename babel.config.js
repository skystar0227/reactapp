module.exports = api => ({
  presets: [
    ['@babel/preset-env', {modules: api.caller(isBabelRegister) && 'auto'}],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
});

const isBabelRegister = caller =>
    caller != null && caller.name === '@babel/register';
