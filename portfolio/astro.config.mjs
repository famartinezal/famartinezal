import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Change 'portfolio' to your GitHub repo name when deploying to GitHub Pages
// If deploying to a custom domain or user/org page (username.github.io), set base to '/'
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});
