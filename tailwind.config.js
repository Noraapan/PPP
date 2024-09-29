/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        pink: "#e28ca7",
        red: "#de3828",
        svart: "#0b0a0c",
        greys: "#cdcdcd",
        whyte: "#e7e5d9",
      },
    },
  },
  plugins: [],
};
