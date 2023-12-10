/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-rgba": "rgba(0, 126, 229, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.shadow-white': {
          'box-shadow': '3px 3px 0 rgba(255, 255, 255, 1)',
        },
        '.shadow-blue': {
          'box-shadow': '3px 3px 0 rgba(0, 126, 229, 1)',
        },
        '.blue-custom-text': {
          'color': 'rgba(0, 126, 229, 1)',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
};

