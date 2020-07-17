const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const { resolve } = require("path");
const postcss = require("./postcss.config");

module.exports = {
    style: {
        css: {
            loaderOptions: { sourceMap: true },
        },
        postcss,
    },
    webpack: {
        alias: {
            "@": resolve(__dirname, "./src/"),
        },
    },
};
