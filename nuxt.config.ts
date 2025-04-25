// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@vueuse/nuxt", "@nuxtjs/seo"],
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css",
					integrity: "sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7",
					crossorigin: "anonymous",
				},
			],
			script: [
				// {
				// 	src: "https://assets.flodesk.com/universal.mjs?v=872745720",
				// 	async: true,
				// 	type: "module",
				// },
				// {
				// 	src: "https://assets.flodesk.com/universal.js?v=872745720",
				// 	async: true,
				// 	nomodule: true,
				// },
			],
		},
	},
	css: ["~/assets/styles/style.css", "~/assets/styles/responsive.css", "~/assets/styles/all.css"],
	site: {
		// url: "", // Site URL Here
		name: "Joyful Orlando",
		titleTemplate: "%s | Joyful Orlando",
	},
	runtimeConfig: {
		public: {
			gMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
		},
	},
	compatibilityDate: "2024-11-01",
	eslint: {
		config: {
			stylistic: {
				indent: "tab",
				semi: true,
				quotes: "double",
			},
		},
	},
	sitemap: {
		sources: [
			"/api/__sitemap__/urls",
		],
	},
});
