/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#F59E0B', // Your yellow color
            dark: '#B45309',
          },
          secondary: {
            DEFAULT: '#3B82F6', // Your blue color
            dark: '#1D4ED8',
          },
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-out',
          'fade-in-up': 'fadeInUp 0.6s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }