export default defineSitemapEventHandler(async (event) => {
	const events = await $fetch("/api/events");
	const categories = await $fetch("/api/categories");
	const oldSlugs = await $fetch("/api/old_slugs");

	return [
		...events.map(event => ({
			loc: `/event/${event.slug}`,
		})),
		...oldSlugs.map(slug => ({
			loc: `/event/${slug}`,
		})),
		...categories.map(category => ({
			loc: `/categories/${category.slug}`,
		})),
	];
});
