// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@vueuse/nuxt",
		"@nuxtjs/seo",
		"nuxt-gtag",
		"nuxt-meta-pixel",
	],
	devtools: { enabled: true },
	css: ["~/assets/styles/style.css", "~/assets/styles/responsive.css", "~/assets/styles/all.css"],
	site: {
		url: "https://www.joyfulorlando.com",
		name: "Joyful Orlando",
		titleTemplate: "%s | Joyful Orlando",
	},
	runtimeConfig: {
		public: {
			gMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
			metapixel: {
				default: {
					id: "561652373662473",
				},
			},
		},
	},
	routeRules: {
		"/": { isr: 12 * 60 * 60 },
		"/about": { prerender: true },
		"/submit": { prerender: true },
		"/giveaway": { prerender: true },
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
	gtag: {
		enabled: process.env.NODE_ENV === "production",
		id: "G-0M978QS65C",
	},
	sitemap: {
		sources: [
			"/api/__sitemap__/urls",
		],
	},
});
