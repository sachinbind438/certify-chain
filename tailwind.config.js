/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E9F1FA",  // Light blue
          DEFAULT: "#00ABE4", // Bright blue
        }
      },
    },
  },
  plugins: [],
};
