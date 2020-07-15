const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const tailwindcss = require("tailwindcss");
const { resolve } = require("path");

module.exports = {
    style: {
        postcss: {
            mode: "extends" || "file",
            plugins: [tailwindcss],
        },
    },
    webpack: {
        alias: {
            images: resolve(__dirname, "./src/assets/images"),
            scss: resolve(__dirname, "./src/assets/scss"),
        },
    },
};
