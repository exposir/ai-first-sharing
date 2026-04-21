import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        claude: {
          dark: "rgb(var(--color-claude-dark) / <alpha-value>)",
          light: "rgb(var(--color-claude-light) / <alpha-value>)",
          mid: "rgb(var(--color-claude-mid) / <alpha-value>)",
          "light-gray": "rgb(var(--color-claude-light-gray) / <alpha-value>)",
          orange: "rgb(var(--color-claude-orange) / <alpha-value>)",
          blue: "rgb(var(--color-claude-blue) / <alpha-value>)",
          green: "rgb(var(--color-claude-green) / <alpha-value>)",
          cream: "#f5f4ef",
          warm: "rgb(var(--color-claude-warm) / <alpha-value>)",
          sand: "#e8e4db",
        },
      },
      fontFamily: {
        // 英文: Inter → 中文: Noto Sans SC → 系统回退
        sans: [
          "var(--font-inter)",
          "var(--font-noto-sans-sc)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        // 衬线: 中英文共用系统衬线字体，不额外加载
        serif: [
          "Georgia",
          '"Noto Serif SC"',
          '"Songti SC"',
          '"SimSun"',
          '"STSong"',
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;