const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const tailwindcss = require("tailwindcss");
const { resolve } = require("path");

module.exports = {
    style: {
        postcss: {
            mode: "extends" /* (default value) */ || "file",
            plugins: [tailwindcss],
        },
    },
    webpack: {
        alias: {
            "@": resolve(__dirname, "./src/"),
        },
    },
};
