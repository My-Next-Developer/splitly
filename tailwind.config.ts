import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        border: "var(--border)",
        brand: "var(--brand)",
        "brand-hover": "var(--brand-hover)",
        "brand-subtle": "var(--brand-subtle)",
        success: "var(--success)",
        "success-subtle": "var(--success-subtle)",
        warning: "var(--warning)",
        "warning-subtle": "var(--warning-subtle)",
        danger: "var(--danger)",
        "danger-subtle": "var(--danger-subtle)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        caption: ["0.75rem", { lineHeight: "1rem" }],
        body: ["0.875rem", { lineHeight: "1.25rem" }],
        "body-lg": ["1rem", { lineHeight: "1.5rem" }],
        title: ["1.25rem", { lineHeight: "1.75rem" }],
        heading: ["1.5rem", { lineHeight: "2rem" }],
        display: ["2.25rem", { lineHeight: "2.5rem" }],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
