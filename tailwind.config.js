/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hand: ["Handlee", "cursive"], // Özel bir isim verdik ('hand')
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin-reverse 25s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
