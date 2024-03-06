/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "480px" },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        maxWidth: "1280px",
      },
    },
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
