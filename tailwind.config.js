/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "sm-container": "20px",
        "sm-col": "4px",
      },
      spacing: {
        "sm-col-1": "50%",
        "sm-col-2": "100%",
      },
    },
  },
  plugins: [],
};
