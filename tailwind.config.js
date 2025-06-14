/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Menambahkan palet warna terpusat untuk konsistensi
      colors: {
        background: 'black',
        foreground: 'whitesmoke',
        primary: {
          DEFAULT: '#A3D8FF',
          dark: '#092965',
        },
        card: {
          DEFAULT: 'rgb(24 24 27)', // setara dengan zinc-900
          foreground: 'whitesmoke',
        },
        muted: {
          foreground: 'rgb(161 161 170)', // setara dengan zinc-400
        },
      },
      // Menambahkan skala tipografi yang konsisten dan responsif
      fontSize: {
        'heading-2xl': ['clamp(3rem, 10vw, 10rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['clamp(1.6rem, 6vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.6' }],
        'body-base': ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.5' }],
        'body-sm': ['clamp(0.75rem, 1.5vw, 0.875rem)', { lineHeight: '1.4' }],
        'caption': ['0.75rem', { lineHeight: '1.3' }],
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [],
};