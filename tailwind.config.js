module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.scss"],
    theme: {
        extend: {
            screens: {
                xxl: "1440px",
            },
            spacing: {
                "72": "18rem",
                "84": "21rem",
                "96": "24rem",
            },
        },
    },
    variants: {},
    plugins: [],
};
