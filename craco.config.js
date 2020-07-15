const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const tailwindcss = require("tailwindcss");
const { resolve } = require("path");
const globImporter = require("node-sass-glob-importer");

module.exports = {
    style: {
        css: {
            loaderOptions: { sourceMap: true },
        },
        sass: {
            loaderOptions: {
                sourceMap: true,
                sassOptions: {
                    importer: globImporter(),
                },
            },
        },
        postcss: {
            mode: "extends" || "file",
            plugins: [tailwindcss],
        },
    },
    webpack: {
        alias: {
            images: resolve(__dirname, "./src/assets/images"),
            scss: resolve(__dirname, "./src/assets/scss"),
            components: resolve(__dirname, "./src/components"),
            views: resolve(__dirname, "./src/views"),
        },
    },
};
