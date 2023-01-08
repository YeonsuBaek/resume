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
      colors: {
        primary: "#222",
        secondary: "#555",
        border: "#e0e0e0",
      },
      fontSize: {
        "header-1": "40px",
        "header-2": "28px",
        "header-3": "20px",
        "header-4": "14px",
        "body-lg": "18px",
        "body-md": "16px",
        "body-sm": "12px",
      },
    },
  },
  plugins: [],
};
