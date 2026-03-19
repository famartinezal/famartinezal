/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#0d0d0f',
          1: '#111115',
          2: '#18181e',
          3: '#1e1e26',
          4: '#26262f',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dim: '#4c1d95',
          glow: 'rgba(124, 58, 237, 0.25)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          hover: 'rgba(255,255,255,0.14)',
        },
        muted: '#6b7280',
        subtle: '#9ca3af',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'cursor-blink': 'cursorBlink 1.1s step-start infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.35)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(270,100%,60%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(240,100%,70%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(290,100%,60%,0.1) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
};
