/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/components/header/**/*.{html,ts}",
    "./src/app/pages/cart/**/*.{html,ts}",
    "./src/app/pages/home/**/*.{html,ts}",
    "./src/app/**/*.{html,js}",
    "./src/app/pages/home/components/filters/**/*.{html,ts}",
    "./src/app/pages/home/components/product-box/**/*.{html,ts}",
    "./src/app/pages/home/components/products-header/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}; 
