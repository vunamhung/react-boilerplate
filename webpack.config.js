const { resolve } = require("path");

module.exports = {
    resolve: {
        alias: {
            images: resolve(__dirname, "./src/assets/images"),
            scss: resolve(__dirname, "./src/assets/scss"),
            css: resolve(__dirname, "./src/assets/css"),
            components: resolve(__dirname, "./src/components"),
            views: resolve(__dirname, "./src/views"),
            utilities: resolve(__dirname, "./src/utilities"),
        },
    },
};
