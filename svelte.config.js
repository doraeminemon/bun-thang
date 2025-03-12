import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				domains: ['bun-thang.vercel.app'],
			}
		}),

		alias: {
			// this will match a file
			'$components': './src/components',
		}
	},

	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
