export default defineSitemapEventHandler(async (event) => {
	const events = await $fetch("/api/events");
	const categories = await $fetch("/api/categories");

	return [
		...events.map(event => ({
			loc: `/events/${event.slug}`,
		})),
		...categories.map(category => ({
			loc: `/categories/${category.slug}`,
		})),
	];
});
