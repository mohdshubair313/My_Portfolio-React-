/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '650px',
      md: '770px',
      lg: '960px',
      xl: '1200px',
    },

    extend: {
      colors: {
        primary: '0a0a0a',
        secondary: '880963',
      },
      backgroundImage: {
        about:"url('./assets/about.jpg')",
        services: "url('./assets/Designer (10).png')",
      },
    },
  },
  plugins: [],
}