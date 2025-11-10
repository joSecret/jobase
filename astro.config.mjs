import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import { SITE } from './src/const';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/joSecret',
  base: SITE.BASE_PATH,
	integrations: [mdx(), sitemap(), icon()],
	vite: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@pcss': path.resolve(__dirname, './src/pcss'),
				'@style': path.resolve(__dirname, './src/styles'),
				'@img': path.resolve(__dirname, './src/assets/img'),
				'@data': path.resolve(__dirname, './src/data'),
				'@layouts': path.resolve(__dirname, './src/layouts'),
				'@comp': path.resolve(__dirname, './src/components'),
				'@snippets': path.resolve(__dirname, './src/components/snippets'),
				'@local': path.resolve(__dirname, './src/components/local'),
				'@block': path.resolve(__dirname, './src/components/snippets/block'),
				'@theme': path.resolve(__dirname, './src/components/theme'),
				'@portfolio': path.resolve(__dirname, './src/components/portfolio'),
			}
		}
	}
});
