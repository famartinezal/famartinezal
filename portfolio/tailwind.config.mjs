/** @type {import('tailwindcss').Config} */
// Tokens del design system "Emerald & Slate Editorial" (design.md)
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Superficies — obsidian-grade greens
        bg:       '#0a0f0d',
        's-low':  '#0f1512',
        's-mid':  '#151b18',
        's-high': '#1a211e',
        's-var':  '#2a332f',
        // Texto
        'on-surface':         '#f9fdf9',
        'on-surface-variant': '#a7aca9',
        // Acento esmeralda
        primary:    '#69f6b8',
        'primary-c':'#06b77f',
      },
    },
  },
  plugins: [],
};
