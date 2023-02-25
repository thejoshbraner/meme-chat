/** @type {import('tailwindcss').Config} */
const percentageWidth = require("tailwindcss-percentage-width");
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [percentageWidth],
};
