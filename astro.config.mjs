import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

import { defineConfig } from 'astro/config';
import { SITE } from './src/const';


// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/joSecret',
  base: SITE.BASE_PATH,
	integrations: [mdx(), sitemap(), icon()],
});
