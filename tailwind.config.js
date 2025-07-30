/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        fadeInUp: "fadeInUp 0.8s ease-out",
        slideInLeft: "slideInLeft 0.8s ease-out",
        slideInRight: "slideInRight 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
