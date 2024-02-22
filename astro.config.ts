import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4322',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'server',
  adapter: netlify(),
})
