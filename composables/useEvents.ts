const searchQuery = ref<string>("");

export function useEvents() {
        const { data: eventsRaw } = useFetch("/api/events");

        const events = computed(() => eventsRaw.value?.filter((event) => {
                const eventDate = new Date(event.date);
                const today = new Date();
                return eventDate >= today;
        }));

        function getEventBySlug(slug: string) {
                return events.value?.find(event => event.slug === slug);
        }

        function getEventsByCategoryId(categoryId: string) {
                return events.value?.filter(event => event.categories.includes(categoryId));
        }

        function getEventsByLocationId(locationId: string) {
                return events.value?.filter(event => event.locationId === locationId);
        }

        const featuredEvents = computed(() => {
                return events.value?.filter(event => event.featured === true).slice(0, 3);
        });

        return { events, getEventBySlug, getEventsByCategoryId, getEventsByLocationId, featuredEvents, searchQuery };
}
