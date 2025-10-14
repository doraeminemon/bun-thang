import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				domains: ['bun-thang.vercel.app', 'bun-thang.com'],
			}
		}),

		alias: {
			// this will match a file
			'$components': './src/components',
			'$styles': './src/styles',
		},
		prerender: {
			entries: [
				"*",
				"/blog/category/*/page/",
				"/blog/category/*/page/*",
				"/blog/category/page/",
				"/blog/category/page/*",
				"/blog/page/",
				"/blog/page/*",
			],
		}
	},

	preprocess: [mdsvex({
		// The default mdsvex extension is .svx; this overrides that.
		extensions: [".md"],

		// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
		rehypePlugins: [
			rehypeSlug,
			rehypeAutolinkHeadings,
		],
		layout: {
			article: "./src/layout/+article_layout.svelte",
		}
	})
	],
	extensions: ['.svelte', '.md']
};

export default config;
