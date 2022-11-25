import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: path.resolve('./src/lib')
		}
	},
	vitePlugin: {
		emitCss: false,
	},
	compilerOptions: {
		css: "injected",
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
