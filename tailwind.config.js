/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        success: {
          50: "#f0fff4",
          100: "#c6f6d5",
          500: "#48bb78",
          600: "#38a169",
          700: "#2f855a",
        },
        warning: {
          50: "#fffaf0",
          100: "#fbd38d",
          500: "#ed8936",
          600: "#dd6b20",
          700: "#c05621",
        },
        danger: {
          50: "#fed7d7",
          100: "#feb2b2",
          500: "#f56565",
          600: "#e53e3e",
          700: "#c53030",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
