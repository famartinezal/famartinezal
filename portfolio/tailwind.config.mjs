/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:         '#0b0b0f',
        card:       '#111116',
        'card-h':   '#17171e',
        border:     '#27272f',
        'border-h': '#3f3f4a',
        hi:         '#ffffff',
        mid:        '#c8c8d8',
        lo:         '#8888a0',
        accent:     '#3b82f6',
        'accent-h': '#2563eb',
        'accent-l': '#93c5fd',
        green:      '#34d399',
      },
    },
  },
  plugins: [],
};
