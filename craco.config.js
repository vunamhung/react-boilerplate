const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const { resolve } = require("path");

module.exports = {
    style: {
        css: {
            loaderOptions: { sourceMap: true },
        },
        postcss: {
            plugins: [
                require("postcss-import-ext-glob"),
                require("postcss-import"),
                require("postcss-each"),
                require("tailwindcss"),
                require("postcss-preset-env"),
                require("postcss-hexrgba"),
                require("postcss-clear-fix"),
                require("postcss-inline-svg"),
                require("postcss-svgo"),
                require("postcss-sort-media-queries"),
            ],
        },
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
