/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        login: "48rem",
      },
      colors: {
        "dark-blue": "#000B48",
        secondary: "#C650DA",
        danger: "#FF0F00",
        info: "#1B59F8",
        success: "#26CC37",
        warning: "#EB993F",
        yelow: "#FFFF00",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
