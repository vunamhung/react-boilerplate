module.exports = {
    purge: {
        content: ["./src/**/*.js", "./src/**/*.scss"],
        options: {
            whitelist: ["bg-red-500", "px-4"],
        },
    },
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1440px",
        },
        colors: {
            transparent: "var(--color-transparent)",
            current: "currentColor",

            black: "var(--color-black)",
            white: "var(--color-white)",

            neutral: {
                "000": "var(--color-neutral-000)",
                "100": "var(--color-neutral-100)",
                "200": "var(--color-neutral-200)",
                "300": "var(--color-neutral-300)",
                "400": "var(--color-neutral-400)",
                "500": "var(--color-neutral-500)",
                "600": "var(--color-neutral-600)",
                "700": "var(--color-neutral-700)",
                "800": "var(--color-neutral-800)",
                "900": "var(--color-neutral-900)",
            },
            primary: {
                "000": "var(--color-primary-000)",
                "100": "var(--color-primary-100)",
                "200": "var(--color-primary-200)",
                "300": "var(--color-primary-300)",
                "400": "var(--color-primary-400)",
                "500": "var(--color-primary-500)",
                "600": "var(--color-primary-600)",
                "700": "var(--color-primary-700)",
                "800": "var(--color-primary-800)",
                "900": "var(--color-primary-900)",
            },
            success: {
                "000": "var(--color-success-000)",
                "100": "var(--color-success-100)",
                "200": "var(--color-success-200)",
                "300": "var(--color-success-300)",
                "400": "var(--color-success-400)",
                "500": "var(--color-success-500)",
                "600": "var(--color-success-600)",
                "700": "var(--color-success-700)",
                "800": "var(--color-success-800)",
                "900": "var(--color-success-900)",
            },
            warning: {
                "000": "var(--color-warning-000)",
                "100": "var(--color-warning-100)",
                "200": "var(--color-warning-200)",
                "300": "var(--color-warning-300)",
                "400": "var(--color-warning-400)",
                "500": "var(--color-warning-500)",
                "600": "var(--color-warning-600)",
                "700": "var(--color-warning-700)",
                "800": "var(--color-warning-800)",
                "900": "var(--color-warning-900)",
            },
            danger: {
                "000": "var(--color-danger-000)",
                "100": "var(--color-danger-100)",
                "200": "var(--color-danger-200)",
                "300": "var(--color-danger-300)",
                "400": "var(--color-danger-400)",
                "500": "var(--color-danger-500)",
                "600": "var(--color-danger-600)",
                "700": "var(--color-danger-700)",
                "800": "var(--color-danger-800)",
                "900": "var(--color-danger-900)",
            },
            info: {
                "000": "var(--color-info-000)",
                "100": "var(--color-info-100)",
                "200": "var(--color-info-200)",
                "300": "var(--color-info-300)",
                "400": "var(--color-info-400)",
                "500": "var(--color-info-500)",
                "600": "var(--color-info-600)",
                "700": "var(--color-info-700)",
                "800": "var(--color-info-800)",
                "900": "var(--color-info-900)",
            },
            urge: {
                "000": "var(--color-urge-000)",
                "100": "var(--color-urge-100)",
                "200": "var(--color-urge-200)",
                "300": "var(--color-urge-300)",
                "400": "var(--color-urge-400)",
                "500": "var(--color-urge-500)",
                "600": "var(--color-urge-600)",
                "700": "var(--color-urge-700)",
                "800": "var(--color-urge-800)",
                "900": "var(--color-urge-900)",
            },
        },
        spacing: {
            px: "var(--spacing-px, 1px)",
            "0": "var(--spacing-0, 0)",
            "1": "var(--spacing-1, 0.25rem)",
            "2": "var(--spacing-2, 0.5rem)",
            "3": "var(--spacing-3, 0.75rem)",
            "4": "var(--spacing-4, 1rem)",
            "5": "var(--spacing-5, 1.25rem)",
            "6": "var(--spacing-6, 1.5rem)",
            "8": "var(--spacing-8, 2rem)",
            "10": "var(--spacing-10, 2.5rem)",
            "12": "var(--spacing-12, 3rem)",
            "16": "var(--spacing-16, 4rem)",
            "20": "var(--spacing-20, 5rem)",
            "24": "var(--spacing-24, 6rem)",
            "32": "var(--spacing-32, 8rem)",
            "40": "var(--spacing-40, 10rem)",
            "48": "var(--spacing-48, 12rem)",
            "56": "var(--spacing-56, 14rem)",
            "64": "var(--spacing-64, 16rem)",
            "72": "var(--spacing-72, 18rem)",
            "84": "var(--spacing-84, 21rem)",
            "96": "var(--spacing-96, 24rem)",
        },
        aspectRatio: {
            none: 0,
            square: [1, 1], // or 1 / 1, or simply 1
            "16/9": [16, 9], // or 16 / 9
            "4/3": [4, 3], // or 4 / 3
            "21/9": [21, 9], // or 21 / 9
        },
        extend: {},
    },
    variants: {
        aspectRatio: ["responsive"],
    },
    plugins: [require("tailwindcss-aspect-ratio"), require("@tailwindcss/custom-forms")],
};
