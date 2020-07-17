module.exports = {
    purge: {
        content: ["./src/**/*.js", "./src/**/*.css"],
        options: {
            whitelist: ["bg-red-500", "px-4"],
        },
    },
    theme: {},
    variants: {
        aspectRatio: ["responsive"],
    },
    plugins: [require("@vunamhung/tailwind-config"), require("tailwindcss-aspect-ratio"), require("@tailwindcss/custom-forms")],
};
