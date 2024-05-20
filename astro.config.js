import { defineConfig as config } from 'astro/config'
import icon from "astro-icon";

// https://astro.build/config
export default config({
	integrations: [
		icon({
			iconDir: "src/assets/icons",
		}),
	],
})
