/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "triumph-red": "#cd192d",
        "triumph-red-hover": "#8F111F",
        "triumph-blue": "#174A7C",
        "triumph-gray": "#A7A9AC",
        "triumph-beige": "#EFE9E5",
        "triumph-bg-gray": "#f6f6f6",
        "triumph-black": "#1e1e1e",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "custom-shadow":
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "custom-shadow2":
          " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
      },
      backgroundImage: {
        ContactImage: "url('./src/assets/images/ContactBG.webp')",
      },
    },
  },
  plugins: [],
};
