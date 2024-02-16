module.exports = {
  printWidth: 152,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['<TYPES>^react', '<TYPES>', '<BUILTIN_MODULES>', '^react$', '<THIRD_PARTY_MODULES>', '^~', '^[.]', '^react-icons', '.css$'],
  importOrderTypeScriptVersion: '5.0.0',
  tailwindFunctions: ['cn', 'clsx'],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};
