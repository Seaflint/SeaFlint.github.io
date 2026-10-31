import type { Config } from "tailwindcss";

const roboto = ["var(--font-roboto)", "ui-sans-serif", "system-ui", "sans-serif"];

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Approved brief palette
        navy: "#05283D",
        "navy-800": "#0a3450",
        cyan: "#00D9E7",
        "cyan-dark": "#00b9c6",
        pale: "#EAF7FC",
        surface: "#ffffff",
        background: "#f6fbff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eef7ff",
        "surface-container": "#dfefff",
        "surface-variant": "#c9e0f6",
        "on-surface": "#091a3a",
        "on-surface-variant": "#4b6584",
        outline: "#7aa5cf",
        "outline-variant": "#d9e8f7",
        primary: "#072ac8",
        "on-primary": "#ffffff",
        "primary-fixed": "#fcf300",
        secondary: "#0d9488",
        "on-secondary": "#ffffff",
        "secondary-container": "#a2d6f9",
        "on-secondary-container": "#072ac8",
        "inverse-surface": "#072ac8",
        "inverse-on-surface": "#ffffff",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "1rem",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        gutter: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      fontFamily: {
        h1: roboto,
        h2: roboto,
        h3: roboto,
        "body-lg": roboto,
        "body-md": roboto,
        "body-sm": roboto,
        "label-md": roboto,
        "label-sm": roboto,
      },
      fontSize: {
        h1: ["52px", { lineHeight: "58px", letterSpacing: "-0.025em", fontWeight: "900" }],
        "h1-mobile": ["34px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "900" }],
        h2: ["32px", { lineHeight: "38px", letterSpacing: "-0.015em", fontWeight: "700" }],
        h3: ["22px", { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", fontWeight: "700" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "700" }],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};

export default config;
