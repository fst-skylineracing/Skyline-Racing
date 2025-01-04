/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        racing: ['"Racing Sans One"', 'cursive'],
      },
      colors: {
        primary: '#FF3A3A',
        secondary: '#1A1A1A',
      },
    },
  },
  plugins: [],
}