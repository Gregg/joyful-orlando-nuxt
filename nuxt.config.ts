// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@vueuse/nuxt", "@nuxtjs/seo"],
	devtools: { enabled: true },
	css: ["~/assets/styles/style.css", "~/assets/styles/responsive.css", "~/assets/styles/all.css"],
	site: {
		url: "https://joyfulorlando.com",
		name: "Joyful Orlando",
		titleTemplate: "%s | Joyful Orlando",
	},
	runtimeConfig: {
		public: {
			gMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
		},
	},
	routeRules: {
		"/": { isr: 12 * 60 * 60 },
		"/about": { prerender: true },
		"/submit": { prerender: true },
		"/events": { isr: 12 * 60 * 60 },
		"/event/**": { isr: true },
		"/category/**": { isr: 12 * 60 * 60 },
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
