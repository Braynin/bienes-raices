/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      celular: { max: "768px" },
      tablet: { min: "769px", max: "1023px" },
      escritorio: { min: "1024px" },
    },
    extend: {
      colors: {
        amarillo: "#E08709",
        amarilloHover: "#ea580c",
        verde: "#71B100",
        verdeHover: "#4d7c0f",
        gris: "#e1e1e1",
        grisOscuro: "#333333",
      },
    },
  },
  plugins: [],
};
