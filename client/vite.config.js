import {defineConfig} from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vuetify from '@vuetify/vite-plugin';

export default defineConfig({
	plugins: [
		vue(),
		vuetify({
			autoImport: true,
		}),
	],
	define: {
		'process.env': {}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@composables': path.resolve(__dirname, 'src/composables'),
		},
	},
	/* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
	resolve: {
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
			'.vue',
		]
	},
	*/
});
