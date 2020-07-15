module.exports = {
    purge: {
        content: ["./src/**/*.js", "./src/**/*.scss"],
        options: {
            whitelist: ["bg-red-500", "px-4"],
        },
    },
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
