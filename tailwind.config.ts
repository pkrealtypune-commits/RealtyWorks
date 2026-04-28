import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        foreground: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        accent: {
          gold: "var(--accent-primary)",
        },
        border: "var(--border-color)",
        // Added for glassmorphism and overlays
        glass: {
          bg: "var(--glass-bg)",
          border: "var(--glass-border)",
        }
      },

      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-jakarta)", "ui-sans-serif", "system-ui"],
      },

      transitionTimingFunction: {
        premium: "var(--ease-premium)",
        "in-out-smooth": "var(--ease-in-out-smooth)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        medium: "var(--duration-medium)",
        slow: "var(--duration-slow)",
      },

      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        widest: ".25em",
      },

      boxShadow: {
        premium: "var(--shadow-premium)",
      },

      // Added for cinematic image transitions
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
};

export default config;