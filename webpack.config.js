const { resolve } = require("path");

module.exports = {
    resolve: {
        alias: {
            images: resolve(__dirname, "./src/assets/images"),
            scss: resolve(__dirname, "./src/assets/scss"),
        },
    },
};
