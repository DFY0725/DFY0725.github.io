import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#2563eb',
        'accent-dark': '#1d4ed8',
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '"Noto Sans SC"', 'sans-serif'],
        mono: ['"SF Mono"', '"Fira Code"', '"Consolas"', '"Liberation Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
