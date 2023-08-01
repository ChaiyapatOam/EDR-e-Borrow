/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,svelte,jsx,tsx}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "#FA991C",
        beige: "#FBF3F2",
        navy: "#1C768F",
        "dark-navy": "#032539",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
