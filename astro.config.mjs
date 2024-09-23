import { defineConfig } from 'astro/config';
import { SITE } from './src/const';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/joSecret',
  base: SITE.BASE_PATH,
	integrations: [mdx(), sitemap()],
});
