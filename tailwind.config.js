module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#794bc4",
        text: "#d9d9d9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
