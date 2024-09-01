const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [flowbite.content(), "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // cyan is used in all components as the default "primary" color
        // here we are actually overriding it to some purple color
        // so practically, the cyan means primary
        cyan: {
          50: "#f5e6fc",
          100: "#e5bff9",
          200: "#d494f6",
          300: "#c167f2",
          400: "#b341ef",
          500: "#A30DEA",
          600: "#9211e4",
          700: "#7712dd",
          800: "#5e12d7",
          900: "#0012d0",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
