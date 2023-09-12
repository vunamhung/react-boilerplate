module.exports = {
  printWidth: 152,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '<TYPES>^[react]',
    '<TYPES>',
    '<BUILTIN_MODULES>',
    '^react$',
    '^@mantine',
    '^[.]',
    '<THIRD_PARTY_MODULES>',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderTypeScriptVersion: '5.0.0',
  tailwindFunctions: ['cn'],
  plugins: [require('@ianvs/prettier-plugin-sort-imports'), require('prettier-plugin-tailwindcss')],
};
