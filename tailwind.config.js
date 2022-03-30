const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#f8f8f8",
        "primary-dark": "#191919",
        pinkish: {
          100: '#fdba74',
          200: '#a7f3d0',
          300: '#6ee7b7',
        },
        blueish: {
          100: "#e6f8f9",
          200: "#b1e8ed",
        },
        greenish:{
          100: "#d9f99d",
        }
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#b5f24b",
              "&:hover": {
                color: "#bef264",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),

            a: {
              color: theme("colors.purple.400"),
              "&:hover": {
                color: theme("colors.purple.300"),
              },
            },
          },
        },
      }),
    },
  },

  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
