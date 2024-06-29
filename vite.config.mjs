import {defineConfig} from 'vite';
import vitePluginString from 'vite-plugin-string';
import path from "path";

const POLYGONJS_VERSION = JSON.stringify(require('./package.json').version);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vitePluginString({compress: false})],
	build: {
		rollupOptions: {
			external: (id) => {
				return id.startsWith('dist/');
			},
		},
	},
	resolve: {
		alias: {
			'@polygonjs': path.resolve(__dirname, '.')
		}
	},
	define: {
		__POLYGONJS_VERSION__: POLYGONJS_VERSION,
	},
});
