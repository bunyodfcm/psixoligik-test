/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        900: "#058c42",
      },
      secondary: {
        900: "#dc0873",
      },
      borderColor: "#dbdbda",
      white: "#ffffff",
      red: "#dd0426",
      black: "#00171f",
      blue: "#2400ff",
      green: "#09fe02",

      // ...
    },
  },
  plugins: [],
};
