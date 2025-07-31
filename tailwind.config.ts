import type { Config } from "tailwindcss"

const config: Config = {
 
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2563eb",
        "muted-foreground": "#6b7280",
      },
    },
  },
  plugins: [],
  darkMode: "class", 
}

export default config
