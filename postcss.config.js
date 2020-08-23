module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: 'string' }),
    require('postcss-import'),
    require('postcss-each'),
    require('tailwindcss'),
    require('postcss-preset-env'),
    require('postcss-nested'),
  ],
};
