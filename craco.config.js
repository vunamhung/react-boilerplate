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
            images: resolve(__dirname, "./src/assets/images"),
            css: resolve(__dirname, "./src/assets/css"),
            components: resolve(__dirname, "./src/components"),
            views: resolve(__dirname, "./src/views"),
            utilities: resolve(__dirname, "./src/utilities"),
        },
    },
};
