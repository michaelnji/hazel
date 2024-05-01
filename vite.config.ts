import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import browserslist from 'browserslist';
import { browserslistToTargets } from "lightningcss";
import { URL, fileURLToPath } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// Unimport.vite({
		// 	addons: {
		// 		vueTemplate: true,
		// 	},
		// 	imports: [{ name: "push", from: "notivue" }],
		// }),
		AutoImport({
			dts: true,
			imports: [
				"vue",
				"vue-router",
				{
					notivue: ["push"],
					"theme-colors": ["getColors"],
					"@vueuse/core": ["useMouse"],
				},
			],
		}),
		vueJsx(),
		VueDevTools(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
		},
	},
	build: {
		cssMinify: "lightningcss",
	},
});
