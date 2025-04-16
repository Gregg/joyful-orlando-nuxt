export function useEvents() {
	const { data: events } = useFetch("/api/events");

	function getEventBySlug(slug: string) {
		return events.value?.find(event => event.slug === slug);
	}

	const featuredEvents = computed(() => {
		return events.value?.filter(event => event.featured === true);
	});

	return { events, getEventBySlug, featuredEvents };
}
