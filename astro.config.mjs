import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mustafaobaidd1.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
