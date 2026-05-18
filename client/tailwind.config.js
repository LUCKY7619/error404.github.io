export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blood: "#8A0303",
        crimson: "#C1121F",
        dark: "#111111"
      },
      boxShadow: {
        neonRed: "0 0 12px rgba(193, 18, 31, 0.8), 0 0 24px rgba(193, 18, 31, 0.5)"
      },
      animation: {
        pulseGlow: "pulseGlow 2s infinite",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(193, 18, 31, 0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(193, 18, 31, 1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        }
      }
    }
  },
  plugins: []
};
