import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import { SITE } from './src/const';


// https://astro.build/config
export default defineConfig({
  site: 'https://josecret.github.io',
  base: `/${SITE.BASE_PATH}`,
	integrations: [mdx(), sitemap(), icon()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@pcss': fileURLToPath(new URL('./src/pcss', import.meta.url)),
        '@style': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@comp': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@snippets': fileURLToPath(new URL('./src/components/snippets', import.meta.url)),
        '@local': fileURLToPath(new URL('./src/components/local', import.meta.url)),
        '@block': fileURLToPath(new URL('./src/components/snippets/block', import.meta.url)),
        '@theme': fileURLToPath(new URL('./src/components/theme', import.meta.url)),
        '@portfolio': fileURLToPath(new URL('./src/components/portfolio', import.meta.url)),
      }
    }
  }
});
