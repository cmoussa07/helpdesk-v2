/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}", // tous tes fichiers React/Vite
    "./src/**/*.{html,svelte}", // si tu utilises du Svelte
    "./App.jsx", // ton fichier App principal
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
