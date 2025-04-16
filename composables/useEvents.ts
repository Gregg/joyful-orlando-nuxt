export function useEvents() {
	const { data: events } = useFetch("/api/events");

	function getEventBySlug(slug: string) {
		return events.value?.find(event => event.slug === slug);
	}

	function getEventsByCategoryId(categoryId: string) {
		return events.value?.filter(event => event.categories.includes(categoryId));
	}

	const featuredEvents = computed(() => {
		return events.value?.filter(event => event.featured === true);
	});

	return { events, getEventBySlug, getEventsByCategoryId, featuredEvents };
}
